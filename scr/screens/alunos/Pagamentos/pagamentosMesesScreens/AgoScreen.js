import React from "react";
import {Text, View} from 'react-native';
import styles from '../../../../../style'
import MesesScreen from "./MesesScreen";

export default function AgoScreen() {
  let mes = 8
  return(
    MesesScreen(mes)
  )
  }