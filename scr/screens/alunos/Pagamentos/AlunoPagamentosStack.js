//Esse Stack serve unicamente porque eu não achei um método de colocar um header
//em cima do Material Top Tabs, então isso é uma gambiarra mas que funciona

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlunoPagamentosTabScreen from "./AlunoPagamentosTabScreen";

const PagamentosStack = createNativeStackNavigator()

export default function PagamentosTopStack() {
    return(
        <PagamentosStack.Navigator
            screenOptions={{
                headerStyle:{backgroundColor:'#DB3942'}
            }}
        >
            <PagamentosStack.Screen name='Pagamentos' component={AlunoPagamentosTabScreen}/>
        </PagamentosStack.Navigator>
    )
}