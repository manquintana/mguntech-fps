import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image } 
from 'react-native';


export default class TournamentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
            <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.getStartedContainer}>
                <Text style={styles.tituloSeccion}>
                    Modo torneo
                </Text>

                <Text style={styles.whiteText}>
                    ¿Está listo?
                </Text>
                
                <TouchableOpacity
                style={styles.extraBigButtons}
                /* onPress={() => {}}  */
                /* onPress={} */
                >
                    <Text style={styles.extraBigButtonsText}>
                        LISTO
                    </Text>
                </TouchableOpacity>
                
            </View>
            </ScrollView>
        </View>
    );
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
/* PracticeScreen.navigationOptions = {
    headerTitle: (
      <View style={{ 
                  flex: 1, 
                  justifyContent: 'center',
                  alignItems:'center'
                  }}>
        <Image 
              resizeMode="contain"
              style={{width:80, height:80}}
              source={require('../../assets/images/robot-dev.png')}/>
      </View>
    ),
    headerStyle: {
      backgroundColor: '#071B40',
      height:80
    },
    headerTintColor: '#fff'
  }; */


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
      borderRadius:300
    },
    extraBigButtonsText:{
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
    
   /*  tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#071B40',
      paddingVertical: 20,
    }, */
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