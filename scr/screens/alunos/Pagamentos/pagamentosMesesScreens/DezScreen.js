import React from "react";
import {Text, View} from 'react-native';
import styles from '../../../../../style'
import MesesScreen from "./MesesScreen";

export default function DezScreen() {
  let mes = 12
  return(
    MesesScreen(mes)
  )
  }
