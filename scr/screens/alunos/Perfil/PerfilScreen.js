import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';  // Importando o AsyncStorage
import axios from 'axios';  // Importando o Axios para requisições HTTP

export default function PerfilScreen({ navigation }) {
  const [userId, setUserId] = useState(null);  // State para armazenar o ID do usuário
  const [perfilInfo, setPerfilInfo] = useState({ nome: '', email: '', telefone: '' }); // Estado para armazenar as informações do perfil
  const [loading, setLoading] = useState(true);  // Estado para controle de carregamento
  const [error, setError] = useState(null);  // Estado para controle de erro

  // Recupera o ID do usuário do AsyncStorage
  useEffect(() => {
    const getUserId = async () => {
      const storedUserId = await AsyncStorage.getItem('userId');  // Recuperando o ID do AsyncStorage
      setUserId(storedUserId);
    };

    getUserId();
  }, []);

  // Faz a requisição para obter os dados do perfil do usuário
  useEffect(() => {
    if (userId) {
      setLoading(true);  // Inicia o carregamento
      axios.get(`http://localhost:3000/perfil/${userId}`)  // Requisição para o backend
        .then(response => {
          setPerfilInfo(response.data);  // Atualiza o estado com os dados do perfil
          setLoading(false);  // Finaliza o carregamento
        })
        .catch(error => {
          setError('Erro ao carregar o perfil');  // Define erro caso a requisição falhe
          setLoading(false);  // Finaliza o carregamento
        });
    }
  }, [userId]);

  if (loading) {
    return <Text style={perfilStyle.text}>Carregando...</Text>;  // Exibe uma mensagem de carregamento
  }

  if (error) {
    return <Text style={perfilStyle.text}>{error}</Text>;  // Exibe uma mensagem de erro
  }

  return (
    <View style={perfilStyle.mainView}>
      <View style={{ borderWidth: 1, borderColor: '#db3941b6', margin: 25, paddingTop: 50, backgroundColor: '#ffffff13', borderRadius: 5 }}>
        <View style={{ alignSelf: 'center' }}>
          <Image 
            source={require('../../../imgs/profile-icon.png')}
            tintColor={'#db3941da'}
            style={{ resizeMode: 'contain', height: 50, width: 50 }}
          />
        </View>

        <Text style={perfilStyle.text}>Nome:
          <Text style={{ color: '#ffffffda' }}> {perfilInfo.nome}</Text>
        </Text>
        <Text style={perfilStyle.text}>E-mail: 
          <Text style={{ color: '#ffffffda' }}> {perfilInfo.email}</Text>
        </Text>
        <Text style={perfilStyle.text}>Telefone: 
          <Text style={{ color: '#ffffffda' }}> {perfilInfo.telefone}</Text>
        </Text>
      </View>
    </View>
  );
}

const perfilStyle = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
});
