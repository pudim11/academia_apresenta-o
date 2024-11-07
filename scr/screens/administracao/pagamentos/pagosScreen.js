import React from "react";
import styles from "../../../../style";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";

let pagosounao = [
    {
        id: 0,
        title: 'Não pagos'
    },
    {
        id: 1,
        title: 'Pagos'
    }
]

export let pagos;

export default function AdmPagosScreen({navigation}) {
    
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
            navigation.navigate('Pagamentos');
            pagos = item.id?true:false
          }}
          />
        )
      }

    return(
        <View style={[styles.body,{paddingTop:100, alignItems:''}]}>
          <FlatList 
            data={pagosounao}
            renderItem={renderBotao}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={ItemSeparatorView}
            
          />
        </View>
    )
}