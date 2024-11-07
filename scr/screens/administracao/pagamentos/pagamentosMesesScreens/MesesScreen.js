import React, { useState, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity, Modal, Button } from 'react-native';
import axios from 'axios';
import styles from "../../../../../style";

// Meses de exemplo
const meses = [
  { nome: "Janeiro", numero: 1 },
  { nome: "Fevereiro", numero: 2 },
  { nome: "Março", numero: 3 },
  { nome: "Abril", numero: 4 },
  { nome: "Maio", numero: 5 },
  { nome: "Junho", numero: 6 },
  { nome: "Julho", numero: 7 },
  { nome: "Agosto", numero: 8 },
  { nome: "Setembro", numero: 9 },
  { nome: "Outubro", numero: 10 },
  { nome: "Novembro", numero: 11 },
  { nome: "Dezembro", numero: 12 }
];

export default function MesesScreen({ mes }) {
  const [listapago, setListapago] = useState([]);
  const [listanaopago, setListanaopago] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAluno, setSelectedAluno] = useState(null);

  const fetchAlunos = async (ano, mes) => {
    try {
      const response = await axios.get('http://localhost:3000/alunos?ano=${ano}&mes=${mes}');
      setListapago(response.data.filter(aluno => aluno.estaPago === 1));
      setListanaopago(response.data.filter(aluno => aluno.estaPago === 0));
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const ano = new Date().getFullYear();
    fetchAlunos(ano, mes);
  }, [mes]);

  const renderBotao = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSelectedAluno(item);
      setModalVisible(true);
    }}>
      <View style={[styles.aulas, { alignItems: 'center', flex: 0 }]}>
        <Text style={[styles.listtext, { color: item.estaPago === 1 ? 'green' : 'red' }]}>
          {item.nome}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const atualizarStatusDePagamento = async () => {
    if (selectedAluno) {
      try {
        // Realiza a requisição PUT para atualizar o status de pagamento
        await axios.put('http://localhost:3000/alunos/${selectedAluno.id}, {estaPago: 1,  // Marca como pago}');
  
        // Atualiza o estado local para refletir a mudança
        setListapago(prev => [...prev, selectedAluno]);
        setListanaopago(prev => prev.filter(item => item.id !== selectedAluno.id));
  
        // Fechar o modal
        setModalVisible(false);
      } catch (error) {
        console.error("Erro ao atualizar o pagamento:", error);
        alert("Ocorreu um erro ao tentar realizar o pagamento. Tente novamente.");
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#121212', flexDirection: 'column' }}>
      {loading ? (
        <Text style={{ color: 'white' }}>Carregando...</Text>
      ) : (
        <>
          <FlatList
            data={listapago.concat(listanaopago)}
            renderItem={renderBotao}
            keyExtractor={(item) => item.id.toString()}
          />

          {selectedAluno && (
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={{ backgroundColor: '#00000099', flex: 1 }}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Nome: {selectedAluno.nome}</Text>
                  <Text style={styles.modalText}>Nascimento: {selectedAluno.nascimento}</Text>
                  <Button title="Fechar" onPress={() => setModalVisible(false)} />
                  {selectedAluno.estaPago?null:<Button title="Pagar" onPress={() => 
                    {
                     atualizarStatusDePagamento()
                    }}/>}
                </View>
              </View>
            </Modal>
          )}
        </>
      )}
    </View>
  );
}