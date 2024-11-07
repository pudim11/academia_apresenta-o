import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from "../../../../../style";

function MesesScreen({ mes }) {  // Recebe o mês como prop
  const [userId, setUserId] = useState(null);
  const [valor, setValor] = useState('XXX');
  const [pago, setPago] = useState(false);
  const [vencimento, setVencimento] = useState('xx/xx/xxxx');

  // Recuperar o userId do AsyncStorage
  useEffect(() => {
    const getUserId = async () => {
      const storedUserId = await AsyncStorage.getItem('userId');
      setUserId(storedUserId);
    };

    getUserId();
  }, []);

  // Fazer a requisição para obter as informações de pagamento do mês
  useEffect(() => {
    if (userId && mes) {
      // Fazendo a requisição ao backend para pegar os dados de pagamento para o mês específico
      axios.get(`http://localhost:3000/pagamento/${userId}/${mes}`)
        .then(response => {
          const pagamentoData = response.data;
          setValor(pagamentoData.valor);
          setPago(pagamentoData.estaPago);  // Verifica se o pagamento foi feito
          setVencimento(pagamentoData.vencimento);  // A data de vencimento pode ser recebida também
        })
        .catch(error => {
          console.error("Erro ao buscar os dados de pagamento:", error);
        });
    }
  }, [userId, mes]);

  // Definir a cor do texto com base no status de pagamento
  const valorColor = pago ? 'green' : 'red';

  return (
    <View style={styles.body}>
      <View style={{
        borderWidth: 1,
        borderColor: pago ? 'green' : '#db3941b6',
        margin: 25,
        backgroundColor: '#ffffff13',
        borderRadius: 5,
        padding: 15
      }}>
        <Text style={[styles.text, { fontSize: 30, color: valorColor }]}>R$ {valor}</Text>
        <Text style={[styles.text, styles.graytext, { fontSize: 14 }]}>Vencimento: {vencimento}</Text>
        <Text style={[styles.text, { color: valorColor }]}>
          {pago ? 'Pago' : 'Não pago'}
        </Text>
      </View>
    </View>
  );
}

export default MesesScreen;
