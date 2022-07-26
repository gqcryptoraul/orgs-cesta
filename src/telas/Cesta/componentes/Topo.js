import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import Texto from "../../../componentes/texto";
import topo from "../../../../assets/topo.png";

const width = Dimensions.get('screen').width;
export default function Topo() {
   
   
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalles de Cesta</Texto>
       
    
    </>
    }

    const estilos = StyleSheet.create({
       
        topo: {
            width: '100%',
            height: 578 / 768 * width,
    
        },
        titulo: {
            width: '100%',
            position: 'absolute',
            textAlign: 'center',
            lineHeight: 50,
            color: '#fff',
           
            padding: 20,
            fontSize: 26,
            fontWeight: 'bold',
        },

    });
