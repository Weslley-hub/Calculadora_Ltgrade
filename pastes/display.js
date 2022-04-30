import React from 'react'
import { StyleSheet,  Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default props=>{
    return(
        <Grid style={estilos.visor} >
            <Row size={18}>
            <Text style={estilos.txtVisorOperador} numberOfLines ={1}> {props.operador}</Text>
            </Row>
            <Row size={15}>
            <Text style={estilos.txtVisorIgual} numberOfLines ={1}> {props.igual}</Text>
            </Row> 
        </Grid>
    )
}

const estilos = StyleSheet.create({
    visor: {
        padding:30,
        justifyContent:'center',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        width:'100%',
        height: '100%',
        maxHeight: '40%',
    },
    txtVisorIgual: { 
        fontSize: 70,
        color: '#000',
    },
    txtVisorOperador: {
        padding:20,
        fontSize: 30,
        color: '#808080',
    }
})

  