import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";


const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalles de Cesta</Text>
        <View style={estilos.container}>
            <Text style={estilos.nome}>Cesta de Verduras </Text>
            <View style={estilos.Fazenda}>
                <Image source={logo} style={estilos.imageFazenda}/>
               <Text style={estilos.nomeFazenda}>Jenny Jack Farm </Text>
            </View>
           
            <Text style={estilos.Descripcion}>Una Cesta con producto seleccionados cuidadosamente para el consumo</Text>
            <Text style={estilos.precio}>Precio: $10.00</Text>
        </View>

    </>


}


const estilos = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
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
        fontFamily: 'MontserratBold',
    },

    nome: {
        lineHeight: 46,
        color: 'navy',
       
        fontSize: 26,
        textAlign: 'left',
        fontFamily: 'MontserratBold',
    },
    precio: {
        lineHeight: 46,
        color: 'green',
       
        fontSize: 26,
        textAlign: 'left',
        fontFamily: 'MontserratBold',
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
       
        fontFamily: 'MontserratSemi',
        marginLeft: 10,
    },

    Descripcion: {
        lineHeight: 26,
        color:'gray',
        fontSize: 16,
        fontFamily: 'MontserratRegular',
    },
});

