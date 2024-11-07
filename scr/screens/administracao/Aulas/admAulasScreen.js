import { Text, View, Button, Modal, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { useState } from 'react';
import styles from '../../../../style';
import * as MyFunc from './admAulasLista' //Pegando toda as funções do arquivo "AulasLista.js"

export default function AdmAulasScreen() { //Tela das aulas
  const [modalVisible, setModalVisible] = useState(false)
  const [idAtivo, setIdAtivo] = useState()
    //Botao
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
          setIdAtivo(item.id)
          setModalVisible(true)
        }}
        />
      )
    }
  
    return(
      <View style={[styles.body,{alignItems:''}]}>
        <StatusBar 
          translucent={false}
        />
        <View style={{paddingTop:100}}>
          <FlatList 
            data={MyFunc.returnBotao()}
            renderItem={renderBotao}
            keyExtractor={(item) => item.id}
            extraData={idAtivo}
            ItemSeparatorComponent={ItemSeparatorView}
            
          />
        </View>
        {
            idAtivo ?
              <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(false)
                }}
              >
                <View style={{backgroundColor:'#00000099', flex:1}}>
                  <View style={styles.modalView}>
                      <Text style={styles.modalText}>Aula {MyFunc.returnAulasLista()[idAtivo-1][0]}</Text>
                      <Text style={styles.modalText}>Início {MyFunc.returnAulasLista()[idAtivo-1][1]}</Text>
                      <Text style={styles.modalText}>Término {MyFunc.returnAulasLista()[idAtivo-1][2]}</Text>
                      <Text style={styles.modalText}>Participantes {MyFunc.returnAulasLista()[idAtivo-1][3]}</Text>  
                    <Button 
                      title='Inscrever-se'
                    />
                  </View>
                </View>
              </Modal>
            :
            null
        }
      </View>
    )
  }