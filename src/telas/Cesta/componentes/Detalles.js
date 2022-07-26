import React from "react";
import { StyleSheet, Image,  View } from "react-native";
import Texto from "../../../componentes/texto";
import logo from "../../../../assets/logo.png";

export default function Detalles() {
   
   
    return <>
          <View style={estilos.container}>
            <Texto style={estilos.nome}>Cesta de Verduras </Texto>
            <View style={estilos.Fazenda}>
                <Image source={logo} style={estilos.imageFazenda}/>
               <Texto style={estilos.nomeFazenda}>Jenny Jack Farm </Texto>
            </View>
           
            <Texto style={estilos.Descripcion}>Una Cesta con producto seleccionados cuidadosamente para el consumo</Texto>
            <Texto style={estilos.precio}>Precio: $10.00</Texto>
        </View>

    </>
    }

    const estilos = StyleSheet.create({
        container: {
            paddingVertical: 20,
            paddingHorizontal: 20,
        },
        nome: {
            lineHeight: 46,
            color: 'navy',
           
            fontSize: 26,
            textAlign: 'left',
            fontWeight: 'bold',
        },
        precio: {
            lineHeight: 46,
            color: 'green',
           
            fontSize: 26,
            textAlign: 'left',
            fontWeight: 'bold',
        },
        Fazenda: {
            flexDirection: 'row',
           
            paddingVertical: 20,
        },
        imageFazenda: {
            width: 48,
            height: 48,
        },
        nomeFazenda: {
            lineHeight: 26,
            fontSize: 16,
           
           
            marginLeft: 10,
        },
        Descripcion: {
            lineHeight: 26,
            color:'gray',
            fontSize: 16,
            
        },
    });