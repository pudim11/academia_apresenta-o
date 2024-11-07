import React from "react";
import {Text, View} from 'react-native';
import styles from '../../../../../style'
import MesesScreen from "./MesesScreen";

export default function SetScreen() {
  let mes = 9
  return(
    MesesScreen(mes)
  )
  }