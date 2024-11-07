import React from "react";
import {Text, View} from 'react-native';
import styles from '../../../../../style'
import MesesScreen from "./MesesScreen";

export default function NovScreen() {
  let mes = 11
  return(
    MesesScreen(mes)
  )
  }