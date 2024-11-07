import React from "react";
import {Text, View} from 'react-native';
import styles from '../../../../../style'
import MesesScreen from "./MesesScreen";

export default function MaiScreen() {
  let mes = 5
  return(
    MesesScreen(mes)
  )
  }