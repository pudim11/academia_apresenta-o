const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const cron = require('node-cron');

const app = express();
const PORT = 3000;

// Configuração do CORS
app.use(cors());

// Middleware para permitir o parse de JSON no corpo da requisição
app.use(express.json()); // Isso é necessário para que o body seja tratado como JSON

// Cria a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root', // Substitua pelo seu usuário
  password: '', // Substitua pela sua senha
  database: 'escola',
});

// Conecta ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Função para obter o maior id e incrementar
function obterNovoId(table, callback) {
  connection.query(`SELECT MAX(id) AS maxId FROM ${table}`, (err, results) => {
    if (err) {
      return callback(err);
    }
    // Se o maior id for menor que 4 ou NULL, começa com 4
    const novoId = results[0].maxId && results[0].maxId >= 4 ? results[0].maxId + 1 : 4;
    callback(null, novoId);
  });
}

// Endpoint para puxar alunos ativos e seus pagamentos por ano e mês
app.get('/alunos', (req, res) => {
  const ano = req.query.ano;
  const mes = req.query.mes;

  const query = `
    SELECT aluno.id, aluno.nome, aluno.nascimento, pagamento.estaPago 
    FROM aluno 
    LEFT JOIN pagamento ON aluno.id = pagamento.aluno_id 
    WHERE aluno.estaAtivo = 1 
    AND (YEAR(pagamento.data) = ? AND MONTH(pagamento.data) = ? OR pagamento.data IS NULL)
  `;

  connection.query(query, [ano, mes], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar alunos' });
    }
    res.json(results);
  });
});

// Função que adiciona o pagamento não pago no banco de dados
function adicionarPagamentoNaoPago() {
  const dataAtual = new Date();
  const dataPagamento = `${dataAtual.getFullYear()}-${dataAtual.getMonth() + 1}-01`;

  const query = `
    INSERT INTO pagamento (data, valor, estaPago, aluno_id) 
    SELECT ?, 0, 0, id FROM aluno
    WHERE estaAtivo = 1
    AND id NOT IN (SELECT aluno_id FROM pagamento WHERE data = ?)
  `;

  connection.query(query, [dataPagamento, dataPagamento], (err, result) => {
    if (err) {
      console.error('Erro ao inserir pagamento não pago:', err);
    } else {
      console.log('Pagamentos não pagos adicionados para o novo mês.');
    }
  });
}

// Agendar a função para rodar no primeiro dia de cada mês às 00:00
cron.schedule('0 0 1 * *', () => {
  adicionarPagamentoNaoPago();
});

// Endpoint para registro de usuário e aluno
app.post('/register', (req, res) => {
  const { nome, email, senha, nascimento } = req.body;

  if (!nome || !email || !senha || !nascimento) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  // Primeiro, obtém o próximo id disponível para o usuário
  obterNovoId('usuario', (err, novoUsuarioId) => {
    if (err) {
      console.error('Erro ao obter novo id para usuário:', err);
      return res.status(500).json({ error: 'Erro ao obter novo id para usuário' });
    }

    // Insere o novo usuário com o id gerado
    const queryUsuario = `
      INSERT INTO usuario (id, email, senha, tipo, eAluno, eInstrutor, eAdministracao) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    connection.query(queryUsuario, [novoUsuarioId, email, senha, 1, 1, 0, 0], (err, result) => {
      if (err) {
        console.error('Erro ao criar usuário:', err);
        return res.status(500).json({ error: 'Erro ao criar usuário' });
      }

      // Depois, obtém o próximo id para o aluno
      obterNovoId('aluno', (err, novoAlunoId) => {
        if (err) {
          console.error('Erro ao obter novo id para aluno:', err);
          return res.status(500).json({ error: 'Erro ao obter novo id para aluno' });
        }

        // Insere o aluno com o id gerado
        const queryAluno = `
          INSERT INTO aluno (id, nome, email, nascimento, estaAtivo, usuario_id) 
          VALUES (?, ?, ?, ?, ?, ?)
        `;

        connection.query(queryAluno, [novoAlunoId, nome, email, nascimento, 1, novoUsuarioId], (err) => {
          if (err) {
            console.error('Erro ao criar aluno:', err);
            return res.status(500).json({ error: 'Erro ao criar aluno' });
          }
          res.status(201).json({ message: 'Usuário e aluno registrados com sucesso!' });
        });
      });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: 'E-mail e senha são obrigatórios' });
  }

  const query = `
    SELECT * FROM usuario
    WHERE email = ? AND senha = ?
  `;
  
  connection.query(query, [email, senha], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao verificar credenciais' });
    }

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }

    const usuario = results[0];

    res.json({
      success: true,
      usuario: {
        id: usuario.id,
        email: usuario.email,
        eAdmin: usuario.eAdministracao === 1,
        eAluno: usuario.eAluno === 1,
      },
    });
  });
});


// Rota para obter o perfil do usuário pelo ID
app.get('/perfil/:id', (req, res) => {
  const userId = req.params.id;  // Obtendo o ID do usuário da URL

  // Realizando a consulta no banco de dados
  const query = 'SELECT nome, email, telefone FROM aluno WHERE id = ?';
  connection.query(query, [userId], (err, results) => {  // Substituir db.query por connection.query
    if (err) {
      res.status(500).send('Erro ao consultar o banco de dados');
      return;
    }

    if (results.length > 0) {
      res.json(results[0]);  // Retorna os dados do usuário
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  });
});
// Endpoint para buscar o pagamento do aluno por userId e mês
app.get('/pagamento/:userId/:mes', (req, res) => {
  const { userId, mes } = req.params;

  if (isNaN(userId) || isNaN(mes)) {
    return res.status(400).json({ error: 'Parâmetros inválidos' });
  }

  const query = `
    SELECT p.valor, p.estaPago, 
           DATE_ADD(MIN(p.data), INTERVAL (MONTH(CURRENT_DATE) - MONTH(MIN(p.data))) MONTH) AS vencimento
    FROM pagamento p
    JOIN aluno a ON p.aluno_id = a.id
    WHERE a.id = ? 
    GROUP BY p.id
  `;

  // Alterado de db.query para connection.query
  connection.query(query, [userId], (error, results) => {
    if (error) {
      console.error("Erro no banco de dados:", error);
      return res.status(500).json({ error: 'Erro ao buscar pagamento' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Pagamento não encontrado' });
    }
    res.json(results[0]); // Retorna o primeiro (e único) resultado
  });
});


// Endpoint PUT para atualizar o status de pagamento
app.put('/alunos/:id', (req, res) => {
  const alunoId = req.params.id;  // ID do aluno da URL
  const { estaPago } = req.body;  // Atributo "estaPago" do corpo da requisição

  if (estaPago !== 0 && estaPago !== 1) {
    return res.status(400).send('Valor de "estaPago" deve ser 0 ou 1');
  }

  // Consulta SQL para atualizar o status de pagamento na tabela "pagamentos"
  const query = `
    UPDATE pagamento
    SET estaPago = ?
    WHERE aluno_id = ?;`;

  connection.execute(query, [estaPago, alunoId], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar o status de pagamento:', err);
      return res.status(500).send('Erro interno ao tentar atualizar o pagamento');
    }

    if (result.affectedRows === 0) {
      return res.status(404).send('Aluno não encontrado');
    }

    return res.status(200).send('Status de pagamento atualizado com sucesso');
  });
});


// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
