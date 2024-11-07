//Esse Stack serve unicamente porque eu não achei um método de colocar um header
//em cima do Material Top Tabs, então isso é uma gambiarra mas que funciona

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PagamentosTabScreen from "./PagamentosTabScreen";
import AdmAnosScreen from "./admAnosScreen";
import AdmPagosScreen from "./pagosScreen";

const PagamentosStack = createNativeStackNavigator()

export default function AdmPagamentosTopStack() {
    return(
        <PagamentosStack.Navigator
            initialRouteName="Anos"
            screenOptions={{
                headerStyle:{backgroundColor:'#DB3942'}
            }}
        >
            <PagamentosStack.Screen name='Anos' component={AdmAnosScreen} />
            <PagamentosStack.Screen name='Pagos' component={AdmPagosScreen} />
            <PagamentosStack.Screen name='Pagamentos' component={PagamentosTabScreen}/> 
            
        </PagamentosStack.Navigator>
    )
}