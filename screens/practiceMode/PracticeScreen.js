import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image }
from 'react-native';
import Player from '../../components/Player';



export default class PracticeScreen extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      inicio:1,
      fourSec:4,
      boton:true
    };
    Player.playSound('beep');
  }
  
  
  startPractice= ()  => {
    //var base=5;
    //var numero = Math.floor(Math.random()*5) + base; // Random between 5 and 9
    var numero = 5 // 5 sec
    this.setState(
      {
        inicio:numero,
        boton:false
      }
    ),
    this.startTimer()
  }

  startTimer = () => {
  this.clockCall = setInterval(() => {
    this.decrementInicio();
  }, 1000);
  }
  decrementInicio = () => {  
    if(this.state.inicio == 1){
      clearInterval(this.clockCall);
      Player.playSound('beep');
      this.start4Sec();
      //alert("inicio");
    } 
    else{
      this.setState((prevstate) => ({ inicio: prevstate.inicio-1 }));
    }
  };

  start4Sec = () => {
    this.clockCall = setInterval(() => {
      this.count4Sec();
    }, 1000);
  }
  count4Sec = () => {
    if(this.state.fourSec == 1){
      clearInterval(this.clockCall);
      Player.playSound('beep');
      this.setState({
        boton:true,
        fourSec:4,
        inicio:1
      })
    } 
    else{
      this.setState((prevstate) => ({ fourSec: prevstate.fourSec-1 }));
    }
  };

  
  

  render() {

    if (this.state.boton){
      return (
        <View style={styles.container}>
            <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.getStartedContainer}>
              <Text style={styles.tituloSeccion}>
                Round 1/1
              </Text>
              <Text style={styles.whiteText}>
                Are you ready?
              </Text>
                
              <TouchableOpacity
                style={styles.extraBigButtons}
                onPress={this.startPractice}
                >
                <Text style={styles.extraBigButtonsText}>
                  READY
                </Text>
              </TouchableOpacity>

              {/* <Text style={{color:'#fff'}}>
                inicio: { this.state.inicio } / / 
                4sec: { this.state.fourSec }
              </Text> */}
            </View>
            </ScrollView>
        </View>
    );
    }
    else{
      return (
        <View style={styles.container}>
            <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.getStartedContainer}>
                <Text style={styles.tituloSeccion}>
                  Round 1/1
                </Text>
                <Text style={styles.whiteText}>
                    Are you ready?
                </Text>
                
                <TouchableOpacity
                disabled
                style={styles.extraBigButtonsDisabled}
                onPress={this.startPractice}
                >
                  <Text style={styles.extraBigButtonsTextDisabled}>
                    READY
                  </Text>
                </TouchableOpacity>

                {/* <Text style={{color:'#fff'}}>
                  inicio: { this.state.inicio }  / / 
                  4sec: { this.state.fourSec }
                </Text> */}
                
                
            </View>
            </ScrollView>
        </View>
      )
    }
    
  }
}
PracticeScreen.navigationOptions = {
  title: 'FPS - Practice Mode',
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
    extraBigButtons:{
      backgroundColor:'#1C6BFF',
      width:300,
      height:300,
      marginTop:30,
      marginBottom:30,
      borderRadius:300,
      /* borderRightColor:'#fff',
      borderRightWidth:4,
      borderBottomColor:'#fff',
      borderBottomWidth:4 */
    },
    
    extraBigButtonsText:{
      fontSize: 66,
      textAlign:'center',
      textAlignVertical:'center',
      lineHeight:300,
      color: '#fff'
    },
    extraBigButtonsDisabled:{
      backgroundColor:'#444',
      width:300,
      height:300,
      marginTop:30,
      marginBottom:30,
      borderRadius:300
    },
    extraBigButtonsTextDisabled:{
      fontSize: 66,
      textAlign:'center',
      textAlignVertical:'center',
      lineHeight:300,
      color: '#555'
    },
    whiteText: {
        fontSize:18,
        color:'#fff',
        textAlign:'center',
        marginBottom: 10
      },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 0,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 0,
      paddingTop:30,
      marginBottom: 20,
      backgroundColor:'#071B40'
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
      marginTop:30
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
});