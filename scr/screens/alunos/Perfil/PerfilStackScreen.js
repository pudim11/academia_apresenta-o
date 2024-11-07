import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PerfilScreen from "./PerfilScreen";
import EditarPerfilScreen from "./EditarPerfilScreen";
import RecuperarSenhaScreen from "./RecuperarSenhaScreen";

const PerfilStack     = createNativeStackNavigator(); //Stack do  perfil

export default function PerfilStackScreen(){
    return(
      <PerfilStack.Navigator
        screenOptions={{
          headerStyle:{backgroundColor:'#DB3942'}
        }}
      >
        <PerfilStack.Screen name = 'Perfil' component={PerfilScreen}/>
        <PerfilStack.Screen name = 'Editar Perfil' component={EditarPerfilScreen}/>
        <PerfilStack.Screen name = 'Recuperar Senha' component={RecuperarSenhaScreen}/>
      </PerfilStack.Navigator>
    )
}

