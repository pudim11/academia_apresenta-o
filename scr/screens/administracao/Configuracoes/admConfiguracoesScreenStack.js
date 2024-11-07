import styles from "../../../../style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdmConfiguracoesScreen from "./admConfiguracoesScreen";
import AdmRecuperarSenhaScreen from "./admRecuperarSenhaScreen";

const ConfiguracoesStack = createNativeStackNavigator();

export default function AdmConfiguracoesScreenStack() {
    return(
        <ConfiguracoesStack.Navigator>
            <ConfiguracoesStack.Screen name="Configurações" component={AdmConfiguracoesScreen} 
                options={{
                    headerStyle:{backgroundColor:'#DB3942'}
                }}
            />
            <ConfiguracoesStack.Screen name="Recuperar Senha" component={AdmRecuperarSenhaScreen}/>
        </ConfiguracoesStack.Navigator>
    )
}