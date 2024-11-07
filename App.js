import { Text, View } from 'react-native';

import AdmNavigator from './scr/screens/administracao/AdmNavigator';
import AlunoNavigator from './scr/screens/alunos/AlunoNavigator';

import styles from './style';
import LoginScreen from './scr/screens/loginScreen';
import PerfilScreen from './scr/screens/alunos/Perfil/PerfilScreen';
import LoginNavigator from './scr/screens/LoginNavigator';



export default function App() {
  return (
    LoginNavigator()
    //LoginScreen()
    //AdmNavigator()
    //AlunoNavigator()
    //PerfilScreen()
  );
}