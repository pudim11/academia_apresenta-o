import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet
} from "react-native"
import styles from "../../../../style";

export default function AdmPerfilScreen({ navigation }){
  return(
    <View style={styles.body}>
      <Text style={styles.text}>Nome: </Text>
      <Text style={styles.text}>E-mail: </Text>
      <Text style={styles.text}>Telefone: </Text>
      <Text style={[styles.text,{marginBottom:100}]}>Perfil!</Text>
      <Button
        title = 'Editar perfil'
        onPress={() => navigation.navigate('Editar Perfil')}
      />
    </View>
  )
}