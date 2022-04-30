import React, {useState} from 'react';
import { SafeAreaView} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Teclado from '../componentes/button';
import Visor from './display'

let status = {
   displayValue: '',
   displayResultado: 0,
   displayOperador: false, 
   point: false,
} 

export default function (){

   const [displayTela,setdisplayTela] = useState(status.displayValue)
   const [displayResul,setdisplayResul] = useState(status.displayResultado)
 
   const addDigito=(digito)=> {
    if(digito=='+' || digito=='*' || digito=='-' || digito=='/' ) { status.point= false}

    if(digito=='.' && !status.point) {
      status.point=true
      status.displayOperador=false
    } else if (digito=='.' && status.point){ return }

    status.displayValue=status.displayValue+digito
    setdisplayTela(status.displayValue)
    setdisplayResul(status.displayResultado)
    status.displayOperador=false
  } 

  const clearDisplay=()=>{
    status = {
      displayValue: '',
      displayResultado: 0,
      displayOperador: false,
      point: false,
   } 
   setdisplayTela(status.displayValue)
   setdisplayResul(status.displayResultado)
  }

  const Operacao=(digito)=>{
    if (digito =='AC'){
      clearDisplay()
      return
    } 
    try{
      status.displayResultado = eval(status.displayValue)
      status.displayOperador=true
      setdisplayResul(status.displayResultado)
    } catch {
      status.displayResultado = 'INVALIDO'
      status.displayOperador=true
      setdisplayResul(status.displayResultado)
    }
  }

    return (
    <SafeAreaView >
    <Visor operador={displayTela} igual={displayResul} /> 
    <Grid >
            <Row size={20}>
            <Teclado texto="AC" triplo Digitar={()=>{clearDisplay('AC')}} />
            <Teclado texto="÷"  Operador Digitar={()=>{addDigito('/')}} />
            </Row>
            <Row size={20}>
            <Teclado texto="7"  Digitar={()=>{addDigito('7')}} />
            <Teclado texto="8"  Digitar={()=>{addDigito('8')}} />
            <Teclado texto="9"  Digitar={()=>{addDigito('9')}} />
            <Teclado texto="X"  Operador Digitar={()=>{addDigito('*')}} />
            </Row>
            <Row size={20}>
            <Teclado texto="4"  Digitar={()=>{addDigito('4')}} />
            <Teclado texto="5"  Digitar={()=>{addDigito('5')}} />
            <Teclado texto="6"  Digitar={()=>{addDigito('6')}} />
            <Teclado texto="-"  Operador Digitar={()=>{addDigito('-')}} />
            </Row>
            <Row size={20}>
            <Teclado texto="1"  Digitar={()=>{addDigito('1')}} />
            <Teclado texto="2"  Digitar={()=>{addDigito('2')}} />
            <Teclado texto="3"  Digitar={()=>{addDigito('3')}} />
            <Teclado texto="+"  Operador Digitar={()=>{addDigito('+')}} />
            </Row>
            <Row size={20}>
            <Teclado texto="0"  duplo Digitar={()=>{addDigito('0')}} />
            <Teclado texto="."  Digitar={()=>{addDigito('.')}} />
            <Teclado texto="="  igualdade Digitar={()=>{Operacao()}} />
            </Row>   
            </Grid>
    </SafeAreaView>
    );
}

    
