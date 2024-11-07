import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./loginScreen";
import RegistreScreen from "./RegistreScreen";
import { NavigationContainer } from "@react-navigation/native";
import styles from "../../style";
import AdmNavigator from "./administracao/AdmNavigator";
import AlunoNavigator from "./alunos/AlunoNavigator";


const LoginNavigatorStack = createNativeStackNavigator();

export default function LoginNavigator(){
    const config = { //Configuração pra mudar a animação de troca de tela
        animation: 'spring',
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      };
    return(
        <NavigationContainer>
            <LoginNavigatorStack.Navigator
            
            screenOptions={{
                headerShown:false,
                headerTitleStyle:{justifyContent:'center'},
                tabBarStyle:styles.tabBarStyle, 
                tabBarActiveTintColor:'#DB3942',
                
                
            }}>
                <LoginNavigatorStack.Screen options={{headerShown:false}} name="LoginScreen" component={LoginScreen}/>
                <LoginNavigatorStack.Screen options={{headerShown:false}} name="RegistreScreen" component={RegistreScreen}/>
                <LoginNavigatorStack.Screen name="AdminNavigator" component={AdmNavigator}/>
                <LoginNavigatorStack.Screen name="AlunoNavigator" component={AlunoNavigator}/>
                
            </LoginNavigatorStack.Navigator>
        </NavigationContainer>
    )
}