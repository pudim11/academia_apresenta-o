import React from "react";
import {
    View,
    Text,
    Button,
} from "react-native"
import styles from "../../../../style";

export default function EditarPerfilScreen({ navigation }){
    return(
      <View style={styles.body}>
        <Text style={styles.text}>Editar perfil!</Text>
        <Button
          title = 'Recuperar senha'
          onPress={() => navigation.navigate('Recuperar Senha')}
        />
      </View>
    )
}