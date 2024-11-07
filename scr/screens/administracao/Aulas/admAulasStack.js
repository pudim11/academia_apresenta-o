import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdmAulasScreen from "./admAulasScreen";

const AulasStack = createNativeStackNavigator();

export default function AdmAulasStackScreen() {
    return(
        <AulasStack.Navigator
        screenOptions={{
            headerStyle:{backgroundColor:'#DB3942'}
          }}
        >
            <AulasStack.Screen name='Aulas' component={AdmAulasScreen}/>
        </AulasStack.Navigator>
    )
}