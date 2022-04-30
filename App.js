import Calcular from './pastes/calculator';
import { StyleSheet, StatusBar} from 'react-native';

import { Grid } from "react-native-easy-grid";

export default function App() {
  return (
    <Grid style={estilos.conteiner} > 
    <StatusBar/>
    <Calcular/>
    </Grid>
    
  );
};

const estilos = StyleSheet.create({
  conteiner: {
     padding:1,
     maxHeight: '100%',
     maxWidth: '100%',
     justifyContent: 'center',
     alignItems: 'flex-end',
  },
});