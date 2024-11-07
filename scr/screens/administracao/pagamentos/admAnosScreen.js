import styles from "../../../../style";
import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import * as MyFunc from './admAnosLista'

export let anoAtivo;

export default function AdmAnosScreen({navigation}) {
    const Botao = ({item, onPress}) => (
        <TouchableOpacity 
        onPress={onPress}
        >
          <View style={[styles.aulas,{alignItems:'center'}]}>
            <Text style={styles.listtext}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )
      
      const ItemSeparatorView = () => {
        return (
          <View 
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#c8c8c8ce',
            }}
          />
        )
      }
    
      const renderBotao = ({item}) => {
        return(
          <Botao 
          item={item}
          onPress={() => {
            anoAtivo = item.title
            navigation.navigate('Pagos');
          }}
          />
        )
      }

    return(
        <View style={[styles.body,{paddingTop:100, alignItems:''}]}>
          <FlatList 
            data={MyFunc.returnBotao()}
            renderItem={renderBotao}
            keyExtractor={(item) => item.id}
            extraData={anoAtivo}
            ItemSeparatorComponent={ItemSeparatorView}
            
          />
        </View>
    )
}