import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image, StatusBar, Alert } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importando o AsyncStorage

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showAlarme, setShowAlarme] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();
      if (data.success) {
        const userId = data.usuario.id;  // Supondo que o ID seja retornado pelo servidor
        await AsyncStorage.setItem('userId', userId.toString());  // Salvando o ID no AsyncStorage

        const routeName = data.usuario.eAdmin ? 'AdminNavigator' : 'AlunoNavigator';
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: routeName }],
          })
        );
      } else {
        setShowAlarme(true);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha ao conectar com o servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.logoContainer}>
        <Image source={require('../imgs/logo-CT-removedbg.png')} style={styles.logo} />
      </View>

      <View style={styles.formContainer}>
        <Text style={Inputstyle.login}>Login</Text>
        <TextInput
          style={Inputstyle.input}
          onChangeText={setEmail}
          value={email}
          placeholder="E-mail"
          placeholderTextColor="#ffffff99"
          color="white"
        />
        <TextInput
          style={Inputstyle.input}
          onChangeText={setSenha}
          value={senha}
          placeholder="Senha"
          placeholderTextColor="#ffffff99"
          color="white"
          secureTextEntry
        />
        {showAlarme && <Text style={Inputstyle.alarme}>E-mail ou senha incorretos.</Text>}
        <Text style={[styles.text, { fontSize: 15, marginLeft: 15 }]}>
          Não possui conta?{' '}
          <Text style={Inputstyle.registrase} onPress={() => navigation.navigate('RegistreScreen')}>
            Registre-se
          </Text>
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Pressable style={Inputstyle.pressablestyle} onPress={handleLogin}>
            <Text style={Inputstyle.pressabletext}>Entrar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  logoContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

const Inputstyle = StyleSheet.create({
  input: {
    height: 40,
    padding: 10,
    margin: 12,
    borderWidth: 1,
    borderColor: '#DB3942',
    borderRadius: 5,
  },
  pressablestyle: {
    padding: 10,
    backgroundColor: '#DB3942',
    width: 85,
    height: 40,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressabletext: {
    fontSize: 14,
    color: 'white',
  },
  registrase: {
    fontSize: 15,
    textDecorationLine: 'underline',
    color: '#DB3942',
  },
  alarme: {
    fontSize: 14,
    marginLeft: 15,
    color: 'red',
  },
  login: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
