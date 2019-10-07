import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';




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
            /* onPress={() => props }  */
            onPress={startPracticeMode}
          >
            <Text style={styles.bigButtonsText}>PRÁCTICA</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.bigButtons}
            /* onPress={() => {}}  */
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
    
    <View style={{ 
                flex: 1, 
                justifyContent: 'center',
                alignItems:'center'
    }}>
      <Image 
            resizeMode="contain"
            style={{width:80, height:80}}
            source={require('../assets/images/robot-dev.png')}/>
    </View>
  ),
  headerStyle: {
    backgroundColor: '#071B40',
    height:80
  },
  headerTintColor: '#fff'
};

function startPracticeMode(){
  alert('iniciando practica');
  
}

function startTournamentMode(){
  alert('iniciando torneo');
}

function visitarWeb() {
  Linking.openURL('https://google.com');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
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
    marginBottom:30
  },
  bigButtonsText:{
    fontSize: 26,
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
  
});
