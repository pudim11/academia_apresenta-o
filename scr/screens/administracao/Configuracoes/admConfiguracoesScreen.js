import React from "react";
import {Text, View, Button} from 'react-native';
import styles from "../../../../style";

export default function AdmConfiguracoesScreen({navigation}){
    return(
      <View style={styles.body}>
        <Text style={styles.text}>Configuracoes!</Text>
        <Button
          title="Ir para configuracoes screen"
          onPress={() => navigation.navigate('Recuperar Senha')}
        />
      </View>
      
    )
  }