import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image } 
from 'react-native';
import NavigationService from '../navigation/NavigationService';

export default class MenuScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render(){
        return(
            <View style={styles.container}>

            <ScrollView
            contentContainerStyle={styles.fiftyPixelMargins}>
            
                <Text style={styles.tituloSeccion}>
                Seleccione opción
                </Text>

                <TouchableOpacity
                style={styles.bigButtons}
                onPress ={
                    ()=>{NavigationService.navigate('Instructions')}
                }
                >
                    <Text style={styles.bigButtonsText}>Instrucciones</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.bigButtons}
                onPress ={
                    ()=>{NavigationService.navigate('Languages')}
                }
                >
                    <Text style={styles.bigButtonsText}>Idioma</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.bigButtons}
                onPress ={
                    ()=>{NavigationService.navigate('Home')}
                }
                >
                    <Text style={styles.bigButtonsText}>Volver al Inicio</Text>
                </TouchableOpacity>


                <TouchableOpacity
                style={styles.bigButtons}
                onPress ={
                    ()=>{NavigationService.navigate('Exit')}
                }
                >
                    <Text style={styles.bigButtonsText}>Salir</Text>
                </TouchableOpacity>
                
            </ScrollView>
            </View>
        )

    }


}


MenuScreen.navigationOptions = {
    title: 'FPS - Menú',
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
      marginTop:15,
      marginBottom:15
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
});