import styles from "../../../../style";
import ConfiguracoesScreen from "./ConfiguracoesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecuperarSenhaScreen from "./RecuperarSenhaScreen";

const ConfiguracoesStack = createNativeStackNavigator();

export default function ConfiguracoesScreenStack() {
    return(
        <ConfiguracoesStack.Navigator>
            <ConfiguracoesStack.Screen name="Configurações" component={ConfiguracoesScreen} 
                options={{
                    headerStyle:{backgroundColor:'#DB3942'}
                }}
            />
            <ConfiguracoesStack.Screen name="Recuperar Senha" component={RecuperarSenhaScreen}/>
        </ConfiguracoesStack.Navigator>
    )
}