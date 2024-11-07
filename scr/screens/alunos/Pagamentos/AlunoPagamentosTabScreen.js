import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';
import styles from '../../../../style';
import JanScreen from './pagamentosMesesScreens/JanScreen';
import FevScreen from './pagamentosMesesScreens/FevScreen';
import MarScreen from './pagamentosMesesScreens/MarScreen';
import AbrScreen from './pagamentosMesesScreens/AbrScreen';
import MaiScreen from './pagamentosMesesScreens/MaiScreen';
import JunScreen from './pagamentosMesesScreens/JunScreen';
import JulScreen from './pagamentosMesesScreens/JulScreen';
import AgoScreen from './pagamentosMesesScreens/AgoScreen';
import SetScreen from './pagamentosMesesScreens/SetScreen';
import OutScreen from './pagamentosMesesScreens/OutScreen';
import NovScreen from './pagamentosMesesScreens/NovScreen';
import DezScreen from './pagamentosMesesScreens/DezScreen';

const PagamentosTab   = createMaterialTopTabNavigator(); //Tab da tela de pagamento



export default function AlunoPagamentosTabScreen(){
    return(
        <PagamentosTab.Navigator
        initialLayout={
          {
          width: Dimensions.get('window').width
        }
      }
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle:styles.tabBarItem,
          tabBarActiveTintColor:'white'
        }}
      >
        <PagamentosTab.Screen name = 'Jan' component={JanScreen}/>
        <PagamentosTab.Screen name = 'Fev' component={FevScreen}/>
        <PagamentosTab.Screen name = 'Mar' component={MarScreen}/>
        <PagamentosTab.Screen name = 'Abr' component={AbrScreen}/>
        <PagamentosTab.Screen name = 'Mai' component={MaiScreen}/>
        <PagamentosTab.Screen name = 'Jun' component={JunScreen}/>
        <PagamentosTab.Screen name = 'Jul' component={JulScreen}/>
        <PagamentosTab.Screen name = 'Ago' component={AgoScreen}/>
        <PagamentosTab.Screen name = 'Set' component={SetScreen}/>
        <PagamentosTab.Screen name = 'Out' component={OutScreen}/>
        <PagamentosTab.Screen name = 'Nov' component={NovScreen}/>
        <PagamentosTab.Screen name = 'Dez' component={DezScreen}/>
      </PagamentosTab.Navigator>
    )
  }