//Navigator do aluno, aqui é onde tds as rotas sao redirecionadas

import styles from "../../../style";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AulasScreen from "./Aulas/aulasScreen";
import PerfilStackScreen from "./Perfil/PerfilStackScreen";
import AlunoPagamentosTabScreen from "./Pagamentos/AlunoPagamentosTabScreen";
import ConfiguracoesScreenStack from "./Configuracoes/ConfiguracoesScreenStack";
import PagamentosTopStack from "./Pagamentos/AlunoPagamentosStack";
import AulasStackScreen from "./Aulas/AulasStack";


const AlunoMainTab = createBottomTabNavigator();

export default function AlunoNavigator() {
    return (
        <AlunoMainTab.Navigator 
                screenOptions={{
                headerShown:false,
                headerTitleStyle:{justifyContent:'center'},
                tabBarStyle:styles.tabBarStyle, 
                tabBarActiveTintColor:'#DB3942'
            }}>
            <AlunoMainTab.Screen name="AulasTab" component={AulasStackScreen} 
                options={{title:'Aulas',tabBarLabel:'Aulas', 
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
                    )
                }}
            />
            <AlunoMainTab.Screen name="PagamentosTab" component={PagamentosTopStack} 
                options={{tabBarLabel:'Pagamentos', 
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="currency-usd" color={color} size={size} />
                    )
                }} 
            />
            <AlunoMainTab.Screen name="PerfilTab" component={PerfilStackScreen} 
                options={{title:'Perfil',tabBarLabel:'Perfil',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }} 
            />
            <AlunoMainTab.Screen name="ConfiguracoesTab" component={ConfiguracoesScreenStack} 
                options={{title:'Configurações',tabBarLabel:'Configurações',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cog" color={color} size={size} />
                    )
                }} 
            />
        </AlunoMainTab.Navigator>
    )
}