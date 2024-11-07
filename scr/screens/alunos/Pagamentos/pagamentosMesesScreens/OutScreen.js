import React from "react";
import {Text, View} from 'react-native';
import styles from '../../../../../style'
import MesesScreen from "./MesesScreen";

export default function OutScreen() {
  let mes = 10
  return(
    MesesScreen(mes)
  )
  }