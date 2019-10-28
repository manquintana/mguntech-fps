import React, { Component } from 'react';
import Player from '../../components/Player';
import { Ionicons } from '@expo/vector-icons';
import {
    View, 
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal
} 
from 'react-native';


import { Slider } from 'react-native-elements';



export default class TournamentScreen extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      inicio:1,
      fourSec:4,
      boton:true,
      //extras for tournament mode
      currentRound:8,
      points: [2,0,4,1,0,0,0,4],
      modalVisible:false,
      finalizado:false,
      shot1:0,
      shot2:0,
      shot3:0,
      shot4:0,
      shot5:0,
    };
  }
  
  incrementRound(){
    if (this.state.currentRound < 8){
      this.setState((prevstate) => ({ currentRound: prevstate.currentRound+1 }));
    }
  }

  decrementRound(){
    if (this.state.currentRound > 1){
      this.setState((prevstate) => ({ currentRound: prevstate.currentRound-1 }));
    }
  
  }

  sumPoints(){
    totalPoints=0;
    this.state.points.forEach(partial => {
      totalPoints=totalPoints+partial;
    });
    return totalPoints;
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});  
  }

  startPractice= ()  => {
    var base=10;
    //var numero = Math.floor(Math.random()*10)+1 + base; //numero entre 11 y 20
    var numero =3;
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
      //shows modal to load points
      this.setModalVisible(true);
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
    if (!this.state.finalizado){
      if (this.state.boton){
        return (
  

          <View style={styles.container}>
              <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer}>
            
            <Modal
              animationType="fade"
              transparent={false}
              visible={this.state.modalVisible}
            >
              <View style={styles.container}>
                <ScrollView
                  contentContainerStyle={styles.fiftyPixelMargins}>
                  
                    <Text style={styles.tituloSeccion}>
                      Cargar puntos de la ronda {this.state.currentRound}
                    </Text>
                    
                    <View style={styles.sliderContainer}>
                      <Text style={styles.slideText}> {this.state.shot1}</Text>
                      <Slider
                        step={1}
                        minimumValue={0}
                        maximumValue={10}
                        width={200}
                        thumbTintColor={"#fff"}
                        minimumTrackTintColor={"#1C6BFF"}
                        value={this.state.shot1}
                        onValueChange={shot1 => this.setState({ shot1 })}
                      />
                    </View>

                    <View style={styles.sliderContainer}>
                      <Text style={styles.slideText}> {this.state.shot2}</Text>
                      <Slider
                        step={1}
                        minimumValue={0}
                        maximumValue={10}
                        width={200}
                        thumbTintColor={"#fff"}
                        minimumTrackTintColor={"#1C6BFF"}
                        value={this.state.shot2}
                        onValueChange={shot2 => this.setState({ shot2 })}
                      />
                    </View>

                    <View style={styles.sliderContainer}>
                      <Text style={styles.slideText}> {this.state.shot3}</Text>
                      <Slider
                        step={1}
                        minimumValue={0}
                        maximumValue={10}
                        width={200}
                        thumbTintColor={"#fff"}
                        minimumTrackTintColor={"#1C6BFF"}
                        value={this.state.shot3}
                        onValueChange={shot3 => this.setState({ shot3 })}
                      />
                    </View>

                    <View style={styles.sliderContainer}>
                    <Text style={styles.slideText}> {this.state.shot4}</Text>
                      <Slider
                        step={1}
                        minimumValue={0}
                        maximumValue={10}
                        width={200}
                        thumbTintColor={"#fff"}
                        minimumTrackTintColor={"#1C6BFF"}
                        value={this.state.shot4}
                        onValueChange={shot4 => this.setState({ shot4 })}
                      />
                    </View>

                    <View style={styles.sliderContainer}>
                      <Text style={styles.slideText}> {this.state.shot5}</Text>
                      <Slider
                        step={1}
                        minimumValue={0}
                        maximumValue={10}
                        width={200}
                        thumbTintColor={"#fff"}
                        minimumTrackTintColor={"#1C6BFF"}
                        value={this.state.shot5}
                        onValueChange={shot5 => this.setState({ shot5 })}
                      />
                    </View>
                    

                    <TouchableOpacity
                      style={styles.bigButtons}
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        if (this.state.currentRound < 8){
                          this.incrementRound();
                        }
                        else{
                          this.setState({finalizado:true});
                        }
                      }}
                    >
                      <Text style={styles.bigButtonsText}>Guardar puntos</Text>
                    </TouchableOpacity>
                    

                </ScrollView>

              </View>

            </Modal>


  
  
            <View style={styles.getStartedContainer}>
                                
              <View style={{}}>
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                  
                  <Ionicons name="md-arrow-dropleft" size={32} style={{color:'#fff', marginRight: 30,}}
                  onPress={() => { this.decrementRound() }}/>
                
                  <Text style={{textAlign:'center',fontSize: 20, color:'#fff'}}>
                    Ronda {this.state.currentRound}/8
                  </Text>
                </View>
              </View>

                <Text style={styles.whiteText}>
                  ¿Está listo?
                </Text>
                  
                <TouchableOpacity
                  style={styles.extraBigButtons}
                  onPress={this.startPractice}
                  >
                  <Text style={styles.extraBigButtonsText}>
                    LISTO
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
                    Ronda {this.state.currentRound}/8
                  </Text>
                  <Text style={styles.whiteText}>
                      ¿Está listo?
                  </Text>
                  
                  <TouchableOpacity
                  disabled
                  style={styles.extraBigButtonsDisabled}
                  onPress={this.startPractice}
                  >
                    <Text style={styles.extraBigButtonsTextDisabled}>
                      LISTO
                    </Text>
                  </TouchableOpacity>
  
                  {/* <Text style={{color:'#fff'}}>
                    inicio: { this.state.inicio }  / / 
                    4sec: { this.state.fourSec }
                  </Text> */}
                  
                  
              </View>
              </ScrollView>
          </View>
        );
      }  
    }

    else{

      return (
        <View style={styles.container}>
            <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.getStartedContainer}>
                <Text style={styles.tituloSeccion}>
                  Resultados
                </Text>
                
                <TouchableOpacity
                  disabled
                  style={styles.extraBigButtonsDisabled}
                  onPress={this.startPractice}
                >
                  <Text style={styles.extraBigButtonsTextScore}>
                    {this.sumPoints()} / 400
                    <Ionicons name="md-thumbs-up" size={32} style={{color:'#fff'}}/>
                  </Text>
                  
                </TouchableOpacity>

            </View>
            </ScrollView>
        </View>
      );
    }
    
}
}

TournamentScreen.navigationOptions = {
    title: 'FPS - Modo Torneo',
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
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: 20,
      color:'#fff',
      lineHeight: 25,
      textAlign: 'center',
      marginBottom:35,
      paddingBottom:10,
      borderBottomColor:'#1C6BFF',
      borderBottomWidth: 2,
      width:'100%',
    },
    iconBack:{
      color:'#fff'
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
    extraBigButtonsTextScore:{
      fontSize: 66,
      textAlign:'center',
      textAlignVertical:'center',
      lineHeight:300,
      color: '#fff'
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
    sliderContainer: {
      flexDirection: 'row', 
      alignItems: 'center',
      marginBottom:20
    },
    slideText: {
      fontSize:18,
      color:'#fff',
      textAlign:'center',
      marginRight:5
    },
});