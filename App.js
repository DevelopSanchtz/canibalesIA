import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Alert,
  Image, Button
} from 'react-native';
import { Picker } from '@react-native-picker/picker'


  const cantidadIzquierda = {canibales: 0, misioneros: 0}
  const cantidadDerecha = { canibales: 3, misioneros: 3 }
  
 
  let bote = true
  
  let accionesRealizadas = 0
  let iteraciones = 0

  const analizarMetodo = (estado) => {
    if ( cantidadDerecha.canibales > 0 || cantidadDerecha.misioneros > 0 ) {
        iteraciones++;

      if (esValido(estado)){ 

          switch(estado) {

            case "1" :

              if (bote) {
                cantidadDerecha.canibales--;
                cantidadIzquierda.canibales++;
              }
              else {
                cantidadIzquierda.canibales--;
                cantidadDerecha.canibales++;
              }
              break;

              case "2" :

                if (bote) {
                  cantidadDerecha.misioneros--;
                  cantidadIzquierda.misioneros++;
                }
                else {
                  cantidadIzquierda.misioneros--;
                  cantidadDerecha.misioneros++;
                }
                break;

                case "3" :
                  if(bote) {
                    cantidadDerecha.canibales -=2;
                    cantidadIzquierda.canibales +=2;
                  }
                  else {
                    cantidadIzquierda.canibales -= 2;
                    cantidadDerecha.canibales += 2;
                  }
                  break;

                case "4" :
                  if(bote) {
                    cantidadDerecha.misioneros -= 2;
                    cantidadIzquierda.misioneros += 2;
                  }
                  else {
                    cantidadIzquierda.misioneros -= 2;
                    cantidadDerecha.misioneros += 2;
                  }
                  break;

                case "5" :

                  if(bote) { 
                    cantidadDerecha.misioneros--;
                    cantidadDerecha.canibales--;
                    cantidadIzquierda.misioneros++;
                    cantidadIzquierda.canibales++;
                  }
                  else { 
                    cantidadIzquierda.misioneros--;
                    cantidadIzquierda.canibales--;
                    cantidadDerecha.misioneros++;
                    cantidadDerecha.canibales++;
                  }
                  break;
          }

          accionesRealizadas++;
          bote = !bote;
          mostrarTodo()

      }
    }

    function esValido(estado) {
      switch(estado) {
        
        case "1":
          if(bote) { 
            if((cantidadDerecha.misioneros >= cantidadDerecha.canibales - 1 || cantidadDerecha.misioneros === 0) 
              && (cantidadDerecha.canibales - 1 >= 0) 
              && (cantidadIzquierda.misioneros >= cantidadIzquierda.canibales + 1 || cantidadIzquierda.misioneros === 0)){ 
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
          else { 
            if((cantidadIzquierda.misioneros >= cantidadIzquierda.canibales - 1 || cantidadIzquierda.misioneros === 0) 
              && (cantidadIzquierda.canibales -1 >= 0) 
              && (cantidadDerecha.misioneros >= cantidadDerecha.canibales + 1 || cantidadDerecha.misioneros === 0) 
            ){
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
        
        case "2":
          if(bote) { 
            if((cantidadDerecha.misioneros - 1 >= cantidadDerecha.canibales || cantidadDerecha.misioneros - 1 === 0) 
              && (cantidadDerecha.misioneros - 1 >= 0) 
              && (cantidadIzquierda.misioneros + 1 >= cantidadIzquierda.canibales)){ 
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
          else { 
            if((cantidadIzquierda.misioneros - 1 >= cantidadIzquierda.canibales || cantidadIzquierda.misioneros - 1 === 0) 
              && (cantidadIzquierda.misioneros - 1 >= 0) 
              && (cantidadDerecha.misioneros + 1 >= cantidadDerecha.canibales)){ 
                return true;
              
            }
            else {
              Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                {text: 'De acuerdo', onPress: () => perdiste ()}
              ])
              return false;
            } 
          }
        
        case "3":
          if(bote) { 
            if((cantidadDerecha.misioneros >= cantidadDerecha.canibales - 2 || cantidadDerecha.misioneros === 0) 
              && (cantidadDerecha.canibales - 2 >= 0) 
              && (cantidadIzquierda.misioneros >= cantidadIzquierda.canibales + 2 || cantidadIzquierda.misioneros === 0)){ 
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
          else {
            if((cantidadIzquierda.misioneros >= cantidadIzquierda.canibales - 2 || cantidadIzquierda.misioneros === 0) 
              && (cantidadIzquierda.canibales - 2 >= 0) 
              && (cantidadDerecha.misioneros >= cantidadDerecha.canibales + 2 || cantidadDerecha.misioneros === 0)){ 
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
      
        case "4":
          if(bote) { 
            if((cantidadDerecha.misioneros - 2 >= cantidadDerecha.canibales || cantidadDerecha.misioneros - 2 === 0) 
              && (cantidadDerecha.misioneros - 2 >= 0) 
              && (cantidadIzquierda.misioneros + 2 >= cantidadDerecha.canibales)){ 
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
          else { 
            if((cantidadIzquierda.misioneros - 2 >= cantidadIzquierda.canibales || cantidadIzquierda.misioneros - 2 === 0)
              && (cantidadIzquierda.misioneros - 2 >= 0) 
              && (cantidadDerecha.misioneros + 2 >= cantidadDerecha.canibales)){
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
       
        case "5":
          if(bote) { 
            if((cantidadDerecha.misioneros - 1 >= cantidadDerecha.canibales - 1) 
              && (cantidadDerecha.misioneros - 1 >= 0 && cantidadDerecha.canibales - 1 >= 0) 
              && (cantidadIzquierda.misioneros + 1 >= cantidadIzquierda.canibales + 1)){ 
              return true;
            }
            else {
              Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                {text: 'De acuerdo', onPress: () => perdiste ()}
              ])
              return false;
            } 
          }
          else { 
            if((cantidadIzquierda.misioneros - 1 >= cantidadIzquierda.canibales - 1) 
              && (cantidadIzquierda.misioneros - 1 >= 0 && cantidadIzquierda.canibales - 1 >= 0) 
              && (cantidadDerecha.misioneros + 1 >= cantidadDerecha.canibales + 1)){ 
              return true;
            }
            else {
              Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                {text: 'Ok', onPress: () => perdiste ()}
              ])
              return false;
            } 
          }
      }
    }

    function perdiste (){
      cantidadIzquierda.canibales = 0,
      cantidadIzquierda.misioneros = 0,

      cantidadDerecha.misioneros = 3,
      cantidadDerecha.canibales = 3

      bote = true
  
      accionesRealizadas = 0
      iteraciones = 0

    }

    function mostrarTodo () {
        if (cantidadIzquierda.canibales === 3 & cantidadIzquierda.misioneros === 3){
          Alert.alert("FELICIDADES", "TUS INTENTOS PARA GANAR FUERON " + iteraciones, [
            {text: 'Perfecto', onPress: () => console.log("Understood")}
          ])
      }
      else {
        if(bote) {
          Alert.alert("Número de Iteraciones totales: " + iteraciones,  
            "Número de misioneros en la izquierda: " + cantidadIzquierda.misioneros + "\n Numero de canibales en la izquierda: " + cantidadIzquierda.canibales + 
            "\n Número de misioneros en la derecha: " + cantidadDerecha.misioneros + " \n Número de canibales en la derecha: " + cantidadDerecha.canibales +
            "\n El bote está del lado: Derecho" , [
              {text: 'De acuerdo', onPress: () => console.log("Understood")}
            ])
        }
        else {
          Alert.alert("Número de Iteraciones totales: " + iteraciones, 
            "Número de misioneros en la izquierda: " + cantidadIzquierda.misioneros + "\n Numero de canibales en la izquierda: " + cantidadIzquierda.canibales + 
            "\n Número de misioneros en la derecha: " + cantidadDerecha.misioneros + " \n Número de canibales en la derecha: " + cantidadDerecha.canibales +
            "\n El bote está del lado: Izquierdo" , [
              {text: 'De acuerdo', onPress: () => console.log("Understood")}
            ])
        }
      }
    }
}


const App = () => {
  
  const [estado, setEstado] = useState("")

  return (
    <View style = { styles.container }> 
      <View >
            <Image source = {require('./src/misioneros-y-canibales.png')} style = {{height:300, width: 415}} />
      </View>

      <Text style = { styles.opciones }>1.- Pasar 1 CANIBAL</Text>
      <Text style = { styles.opciones }>2.- Pasar 1 MISIONERO</Text>
      <Text style = { styles.opciones }>3.- Pasar 2 CANIBALES</Text>
      <Text style = { styles.opciones }>4.- Pasar 2 MISIONEROS</Text>
      <Text style = { styles.opciones }>5.- Pasar 1 CANIBAL y 1 MISIONERO</Text>
      

      <Picker style = {{marginTop: 70, color: "#000", fontSize: 18}}
              selectedValue = {estado} 
              onValueChange = { respuesta => setEstado( respuesta ) }>

          <Picker.Item color = "red" label = "- SELECCIONE LA ACCIÓN -" value = "" />
          <Picker.Item label = "1" value = "1" />
          <Picker.Item label = "2" value = "2" />
          <Picker.Item label = "3" value = "3" />
          <Picker.Item label = "4" value = "4" />
          <Picker.Item label = "5" value = "5" />


      </Picker>
    
    <View style = {{alignItems: "center", marginTop: 60}}>

      <Button
        onPress = {() => analizarMetodo(estado)}
        title = "MOVERSE"
        color = "#0D3D6B"
      />
    </View>
      
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  texto: {
      color: "#000",
      textAlign: "center",
      fontSize: 30,
      marginTop: 10,
      fontWeight: "bold"
  },
  estado: {
    color: "#000",
    textAlign: "center",
    fontSize: 22,
    marginTop: 20,
    marginBottom: 30
  },
  opciones: {
    color: "#000",
    fontSize: 20,
    marginTop:10,
    marginLeft: 5
  }
});

export default App;
