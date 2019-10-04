<<<<<<< HEAD

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler
} from 'react-native';


export default function LanguageScreen() {
  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.fiftyPixelMargins}>

          <Text style={styles.tituloSeccion}>
            Seleccione idioma
          </Text>
  
          <TouchableOpacity
            style={styles.bigButtons}
            onPress ={
              ()=>{return alert('Lenguaje seleccionado: Español');}
            }
          >
            <Text style={styles.bigButtonsText}>Español</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.bigButtons}
            onPress ={
              ()=>{return alert("Aún no se implementó la version en inglés");}
            }
          >
            <Text style={styles.bigButtonsText}>English</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.bigButtons}
            onPress ={
              ()=>{return alert("Aún no se implementó la version en alemán");}
            }
          >
            <Text style={styles.bigButtonsText}>Deutsch</Text>
          </TouchableOpacity>
          
      </ScrollView>
    </View>
  );
}

LanguageScreen.navigationOptions = {
  title: 'FPS - Idioma',
  headerStyle: {
    backgroundColor: '#071B40',
    height:80
  },
  headerTintColor: '#fff',
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E3680',
    color:'#fff'
  },
  tituloSeccion: {
    fontSize: 20,
    color:'#fff',
    lineHeight: 25,
    textAlign: 'center',
    marginBottom:35,
    paddingBottom:10,
    borderBottomColor:'#1C6BFF',
    borderBottomWidth: 2,
    width:'100%'
  },
  bigButtons:{
    backgroundColor:'#1C6BFF',
    width:'100%',
    height:50,
    marginTop:30,
    marginBottom:30
  },
  bigButtonsText:{
    fontSize: 26,
    textAlign:'center',
    lineHeight:50,
    color: '#fff'
  },
  contentContainer: {
    paddingTop: 0,
  },
  fiftyPixelMargins: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop:30
  },
=======

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler
} from 'react-native';


export default function LanguageScreen() {
  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.fiftyPixelMargins}>

          <Text style={styles.tituloSeccion}>
            Seleccione idioma
          </Text>
  
          <TouchableOpacity
            style={styles.bigButtons}
            onPress ={
              ()=>{return alert('Lenguaje seleccionado: Español');}
            }
          >
            <Text style={styles.bigButtonsText}>Español</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.bigButtons}
            onPress ={
              ()=>{return alert("Aún no se implementó la version en inglés");}
            }
          >
            <Text style={styles.bigButtonsText}>English</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.bigButtons}
            onPress ={
              ()=>{return alert("Aún no se implementó la version en alemán");}
            }
          >
            <Text style={styles.bigButtonsText}>Deutsch</Text>
          </TouchableOpacity>
          
      </ScrollView>
    </View>
  );
}

LanguageScreen.navigationOptions = {
  title: 'FPS - Idioma',
  headerStyle: {
    backgroundColor: '#071B40',
    height:80
  },
  headerTintColor: '#fff',
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E3680',
    color:'#fff'
  },
  tituloSeccion: {
    fontSize: 20,
    color:'#fff',
    lineHeight: 25,
    textAlign: 'center',
    marginBottom:35,
    paddingBottom:10,
    borderBottomColor:'#1C6BFF',
    borderBottomWidth: 2,
    width:'100%'
  },
  bigButtons:{
    backgroundColor:'#1C6BFF',
    width:'100%',
    height:50,
    marginTop:30,
    marginBottom:30
  },
  bigButtonsText:{
    fontSize: 26,
    textAlign:'center',
    lineHeight:50,
    color: '#fff'
  },
  contentContainer: {
    paddingTop: 0,
  },
  fiftyPixelMargins: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop:30
  },
>>>>>>> 9fdf871ff33795438b02a57979b0455cee312991
});