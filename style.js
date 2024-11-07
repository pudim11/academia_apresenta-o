import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centerAll: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    body: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      fontSize:20,
      alignItems: 'center',
      justifyContent: 'center',
      color:'white'
    },
    listtext: {
      fontSize:20,
      alignItems: 'center',
      justifyContent: 'center',
      color:'white',
      padding:15
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'black',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      borderWidth:0.3,
      borderColor:'#DB3942'
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      color:'white',
      marginLeft:'25%'
    },
    tabBarPagamentos:{  
      shadowOpacity:0,
      backgroundColor:'#121212',
    },
    tabBarItem:{
      width:65,
      backgroundColor:'black'
    },
    aulas: {
      paddingTop:0,
      paddingBottom:0
    },
    tabBarStyle:{
      backgroundColor: 'black',
      borderTopWidth: 0.5,
      borderColor: 'red'
    },
    screens:{
      backgroundColor:'black'
    },
    graytext:{
      color:'#ffffff99'
    }
})

export default styles;