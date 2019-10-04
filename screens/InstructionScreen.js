import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {Text, View} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Ionicons } from '@expo/vector-icons';

export default function InstructionScreen() {
  return (
    <ScrollView style={styles.container}>

      
      <View style={styles.ninetypercent}>
        <Text style={styles.whiteTextBold}>
          Lea detalladamente todas las instrucciones antes de comenzar a utilizar esta aplicación en un polígono.
        </Text>
        <Text style={styles.whiteText}>
          FPS (FBI PISTOL STAND-ALONE) es un software desarrollado para la práctica de FBI en polígonos que no dispongan de blancos automatizados.
        </Text>
        <Text style={styles.whiteText}>
          Dispone de dos modos de operación: Práctica y Torneo.
        </Text>
        <Text style={styles.whiteText}>
          - Modo Práctica: Una vez iniciada la práctica, la aplicación emitirá un sonido en un lapso aleatorio entre 10 y 20 segundos. 
          Esta será a señal para desenfundar su arma y comenzar su tanda de disparos. 
          Exactamente 4 segundos luego del primer sonido, la aplicación emitirá un segundo sonido, que le indicará que finalizó su tanda de disparos. 
          Tras la segunda señal, usted deberá descargar su arma adecuadamente y prepararse para una siguiente tanda de disparos o bien cesar la actividad.
          A continuación podrá optar por iniciar una nueva práctica, bien regresar al menú principal para cambiar de modo.
          Acate todas las ordenes del instructor a cargo del polígono, pues siempre tendrán prioridad sobre el uso de esta aplicación.
          
        </Text>
        <Text style={styles.whiteText}>
          - Modo Torneo: La operatoria es similar al modo práctica, pero consiste en 8 rondas.
          Al finalizar cada ronda, el sistema le permitirá cargar su puntuación, y le mostrará los puntos de la ronda y los puntos totales acumulados.
          Tras finalizar la última ronda de disparos, la aplicación le mostrará su puntuación final.
        </Text>

        <View style={styles.advertencia}>
          <Text style={styles.whiteTextBold}>
            <Ionicons name="md-alert" size={18} color="#fff" />
            Advertencias de seguridad
          </Text>
          <Text style={styles.whiteText}>
            Queda terminantemente prohibido el uso de esta aplicación si en el polígono se prohibiera el uso de celulares. 
          </Text>
          <Text style={styles.whiteText}>
            Nunca ponga en riesgo su seguridad ni la de terceros; Si Ud. considera que el celular le es una distracción, NO utilice esta aplicación.
          </Text>
          <Text style={styles.whiteText}>
            Si el instructor a cargo del polígono le prohibe usar su celular, NO utilice esta aplicación.
          </Text>
          <Text style={styles.whiteText}>
            SIEMPRE utilice auriculares, los sonidos de la aplicación pueden confundir a otros tiradores. 
            En caso de no usar auriculares inalámbricos, preste especial atención al cable de los mismos. 
            Siempre pase el cable por dentro de su ropa y por el lado contrario al que porta su arma. 
          </Text>
          <Text style={styles.whiteTextBold}>
            Mantenga su teléfono celular u otros dispositivos electrónicos lo más alejado posible de sus municiones cargadas o elementos de recarga. Las baterías suelen explotar y podrían ocasionar accidentes.
          </Text>
        </View>
        
        <Text style={styles.whiteText}>
          Desarrollado por Ing. en Informática Manuel Alejandro Quintana.
        </Text>
        <Text style={styles.whiteText}>
          mguntech.com
        </Text>
        <Text style={styles.whiteText}>
          2019
        </Text>
          
        
        
      </View>
     
    </ScrollView>
  );
}

InstructionScreen.navigationOptions = {
  title: 'FPS - Modo de uso',
  headerStyle: {
    backgroundColor: '#071B40',
    height:80
  },
  headerTintColor: '#fff',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#0E3680',
    color:'#fff'
  },
  whiteText: {
    fontSize:14,
    color:'#fff',
    textAlign:'center',
    marginBottom: 10
  },
  whiteTextBold:{
    fontSize:14,
    color:'#fff',
    textAlign:'center',
    marginBottom: 10,
    fontWeight:'bold'
  },
  ninetypercent:{
    width:'90%',
    alignContent:'center',
    alignSelf:'center',
    marginBottom:30
  },
  advertencia:{
    borderColor:'#E60E02',
    borderWidth:2,
    borderRadius:10,
    marginBottom:20,
    backgroundColor:'#E60E02'

  }
});
