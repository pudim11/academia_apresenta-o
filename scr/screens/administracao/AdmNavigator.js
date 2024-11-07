import styles from "../../../style";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AdmAulasStackScreen from "./Aulas/admAulasStack";
import AdmPagamentosTopStack from "./pagamentos/admPagamentosStack";
import AdmPerfilStackScreen from "./Perfil/admPerfilStackScreen";
import AdmConfiguracoesScreenStack from "./Configuracoes/admConfiguracoesScreenStack";



const AdmMainTab = createBottomTabNavigator();

export default function AdmNavigator() {
    return(
            <AdmMainTab.Navigator
            screenOptions={{
                headerShown:false,
                headerTitleStyle:{justifyContent:'center'},
                tabBarStyle:styles.tabBarStyle, 
                tabBarActiveTintColor:'#DB3942'
            }}>
                <AdmMainTab.Screen name = "AulasTab" component={AdmAulasStackScreen}
                    options={{tabBarLabel:'Aulas',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
                    )
                    }} 
                />
                <AdmMainTab.Screen name = "PagamentosTab" component={AdmPagamentosTopStack}
                    options={{tabBarLabel:'Pagamentos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="currency-usd" color={color} size={size} />
                    )
                    }} 
                />
                <AdmMainTab.Screen name = "PerfilTab" component={AdmPerfilStackScreen}
                options={{title:'Perfil',tabBarLabel:'Perfil',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                    }} 
                />
                <AdmMainTab.Screen name = "ConfiguracoesTab" component={AdmConfiguracoesScreenStack}
                options={{title:'Configurações',tabBarLabel:'Configurções',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cog" color={color} size={size} />
                    )
                }} 
                />               
            </AdmMainTab.Navigator>
    )
}