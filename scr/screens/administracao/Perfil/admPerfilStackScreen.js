import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdmPerfilScreen from "./admPerfilScreen";
import AdmEditarPerfilScreen from "./admEditarPerfilScreen";
import AdmRecuperarSenhaScreen from "./admRecuperarSenhaScreen";

const PerfilStack     = createNativeStackNavigator(); //Stack do  perfil

export default function AdmPerfilStackScreen(){
    return(
      <PerfilStack.Navigator
        screenOptions={{
          headerStyle:{backgroundColor:'#DB3942'}
        }}
      >
        <PerfilStack.Screen name = 'Perfil' component={AdmPerfilScreen}/>
        <PerfilStack.Screen name = 'Editar Perfil' component={AdmEditarPerfilScreen}/>
        <PerfilStack.Screen name = 'Recuperar Senha' component={AdmRecuperarSenhaScreen}/>
      </PerfilStack.Navigator>
    )
}

