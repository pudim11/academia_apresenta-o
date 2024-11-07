import React from "react";
import { View } from 'react-native';
import MesesScreen from "./MesesScreen";

export default function JanScreen() {
  const mes = 1;  // Mês de Janeiro
  return (
    <View style={{ flex: 1 }}>
      {/* Passando o mês (1 para Janeiro) para o componente MesesScreen */}
      <MesesScreen mes={mes} />
    </View>
  );
}
