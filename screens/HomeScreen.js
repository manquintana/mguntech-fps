import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Button
} from 'react-native';


import NavigationService from '../navigation/NavigationService';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.fiftyPixelMargins}>
        
          <Text style={styles.tituloSeccion}>
            Seleccione modo
          </Text>
  
          <TouchableOpacity
            style={styles.bigButtons}
            onPress={startPracticeMode}
          >
            <Text style={styles.bigButtonsText}>PRÁCTICA</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.bigButtons}
            onPress={startTournamentMode}
          >
            <Text style={styles.bigButtonsText}>TORNEO</Text>
          </TouchableOpacity>

      </ScrollView>
      
      <View style={styles.bottomView}>
        <Text style={styles.whiteText}>FPS | v1.0.0-alpha</Text>
        <Text style={styles.whiteText}
          onPress={visitarWeb}>mguntech.com</Text>
      </View>

    </View>
  );
}

HomeScreen.navigationOptions = {
  
  headerTitle: (
    <View style={{flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',}}>
        
        <View style={{flex: 1}}>
          
        </View>
        
        <View style={{flex: 1,alignItems: 'center'}}>
          <Image 
            resizeMode="contain"
            /* style={{width:250, height:100}} */
            style={{width:220}}
            source={require('../assets/images/logoHome2.png')}/>
        </View>
        
        <View style={{flex:1, alignItems:'flex-end'}}>
          <Ionicons name="md-menu" size={32} color="#fff" style={{marginRight:30}}
          onPress={abrirMenu}/>
        </View>
  </View>

    

  ),
  headerStyle: {
    backgroundColor: '#071B40',
    height:80
  },
  headerTintColor: '#fff'
};

function startPracticeMode(){
 /*  alert('iniciando practica'); */
  NavigationService.navigate('Practice');
}

function startTournamentMode(){
  /* alert('iniciando torneo'); */
  NavigationService.navigate('Torneo');
}

function abrirMenu(){
  NavigationService.navigate('Menu');
}

function visitarWeb() {
  Linking.openURL('https://google.com');
}


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
    marginBottom:30,
    borderRadius:30
  },
  bigButtonsText:{
    fontSize: 24,
    textAlign:'center',
    lineHeight:50,
    color: '#fff'
  },
  fiftyPixelMargins: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop:30,
  },
  whiteText: {
    fontSize:14,
    color:'#fff',
    textAlign:'center',
    marginBottom: 0
  },
  bottomView: {
    width: '100%',
    height:57,/* 
    backgroundColor: '#EE5407', */
    justifyContent: 'center',
    paddingBottom:20,
    alignItems: 'center',
    position: 'relative', //Here is the trick
    bottom: 0, //Here is the trick
  },
  
});
