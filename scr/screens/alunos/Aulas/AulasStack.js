import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AulasScreen from "./aulasScreen";

const AulasStack = createNativeStackNavigator();

export default function AulasStackScreen() {
    return(
        <AulasStack.Navigator
        screenOptions={{
            headerStyle:{backgroundColor:'#DB3942'}
          }}
        >
            <AulasStack.Screen name='Aulas' component={AulasScreen}/>
        </AulasStack.Navigator>
    )
}