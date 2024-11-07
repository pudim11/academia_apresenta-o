import React, { useState } from "react";
import { View, Image, TextInput, Text, Pressable, StyleSheet, Platform, Alert } from "react-native";
import { StatusBar } from "react-native-web";
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Importa o CSS para o navegador
import { useNavigation } from "@react-navigation/native";

export default function RegistreScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const toggleDatePicker = () => setShowPicker(!showPicker);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
    setNascimento(formatDate(currentDate));
  };

  const formatDate = (rawDate) => {
    let date = new Date(rawDate);
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha, nascimento }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert('Sucesso', data.message, [{ text: 'OK'}]);
        console.log("funcionando")
      } else {
        Alert.alert('Erro', data.error);
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao conectar com o servidor.');
    }
    navigation.navigate('LoginScreen')
  };
  

  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <StatusBar />
      <View style={{ alignSelf: 'center' }}>
        <Image source={require('../imgs/logo-CT-removedbg.png')} style={{ justifyContent: 'center' }} />
      </View>
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Text style={Loginstyle.login}>Registre-se</Text>
        
        <Text style={Loginstyle.inputname}>Nome</Text>
        <TextInput
          style={Loginstyle.input}
          onChangeText={setNome}
          value={nome}
          placeholder="Fulano"
          placeholderTextColor="#ffffff99"
          color="white"
        />

        <Text style={Loginstyle.inputname}>Nascimento</Text>
        {Platform.OS === 'web' ? (
          <DatePicker
            selected={date}
            onChange={(date) => {
              setDate(date);
              setNascimento(formatDate(date));
            }}
            maxDate={new Date()}
            showYearDropdown
            dateFormat="yyyy-MM-dd"
            customInput={
              <TextInput
                style={Loginstyle.input}
                value={nascimento}
                placeholder="05/03/1994"
                placeholderTextColor="#ffffff99"
                color="white"
              />
            }
          />
        ) : (
          <Pressable onPress={toggleDatePicker}>
            <TextInput
              style={Loginstyle.input}
              value={nascimento}
              placeholder="05/03/1994"
              placeholderTextColor="#ffffff99"
              color="white"
              editable={false}
            />
          </Pressable>
        )}
        {showPicker && Platform.OS !== 'web' && (
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={onChange}
            maximumDate={new Date()}
            minimumDate={new Date('1900-01-01')}
          />
        )}

        <Text style={Loginstyle.inputname}>E-mail</Text>
        <TextInput
          style={Loginstyle.input}
          onChangeText={setEmail}
          value={email}
          placeholder="fulano123@gmail.com"
          placeholderTextColor="#ffffff99"
          color="white"
        />

        <Text style={Loginstyle.inputname}>Senha</Text>
        <TextInput
          style={Loginstyle.input}
          onChangeText={setSenha}
          value={senha}
          placeholder="*********"
          placeholderTextColor="#ffffff99"
          color="white"
          secureTextEntry
        />

        <View style={{ alignItems: 'center' }}>
          <Pressable style={Loginstyle.pressablestyle} onPress={handleRegister}>
            <Text style={Loginstyle.pressabletext}>Registrar-se</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const Loginstyle = StyleSheet.create({
  login: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    padding: 10,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DB3942',
    borderRadius: 15,
  },
  pressablestyle: {
    padding: 10,
    backgroundColor: '#DB3942',
    width: 100,
    height: 40,
    borderRadius: 5,
    marginTop: 30,
  },
  pressabletext: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'white',
  },
  inputname: {
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 3,
  },
});
