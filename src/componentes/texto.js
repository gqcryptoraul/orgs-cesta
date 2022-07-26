import React from "react";

import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

export default function Texto({ children , style}) {
  let estilo = estilos.texto;
  if (style?.fontWeight === "bold") {
    estilo = { ...estilos.texto, ...estilos.textoBold };
    }
  return <Text style={[style, estilos.texto]}>{children}</Text>;

  
}

const estilos = StyleSheet.create({
    texto: {
        
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal',
    },
    textoBold: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal',
    }
});