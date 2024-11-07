import React from "react";
import {Text, View} from 'react-native';
import styles from '../../../../../style'
import MesesScreen from "./MesesScreen";

export default function AbrScreen() {
  let mes = 4
  return(
    MesesScreen(mes)
  )
  }