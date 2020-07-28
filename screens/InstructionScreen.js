import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {Text, View, Image, Linking, TouchableOpacity} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Ionicons } from '@expo/vector-icons';

export default function InstructionScreen() {
  return (
    <ScrollView style={styles.container}>

      
      <View style={styles.ninetypercent}>
        <Text style={styles.whiteTextBold}>
          Please read the instructions carefully before starting to use the app in the shooting range.
        </Text>
        <Text style={styles.whiteText}>
          FPS (FBI PISTOL STAND-ALONE) is a soft developed to allow the FBI practice, in shooting ranges without automatic target systems.
        </Text>
        <Text style={styles.whiteText}>
          There are two operation modes availables: Practice & Tournament.
        </Text>
        <Text style={styles.whiteText}>
          - Practice Mode: Once initialized this mode, the app will 'beep' after 5 seconds.
          This is the signal to unsheathe your weapon and start your shooting round.
          Exactly 4 seconds after the first 'beep', the app will 'beep' again, pointing out the end of the shooting round.
          After that, you may unload correctly your weapon and get prepared for another round or stop the activity.
          You must always follow the instructor orders, as he is always most important than this app.
          
        </Text>
        <Text style={styles.whiteText}>
          - Tournament Mode: It is similar to Practice Mode, but it consist in 8 rounds of 5 shoots each one.
          After each round, you can load your current points.
          If there was any mechanic or another kind of failure, you can repeat the last round by touching the 'Back button' on the left of round number.
          At the end of the last round, the app will calculate your total points and performance.
        </Text>

        <View style={styles.advertencia}>
          <Text style={styles.whiteTextBold}>
            <Ionicons name="md-alert" size={18} color="#fff" />
            Security Warnings!
          </Text>
          <Text style={styles.whiteText}>
            The use of this app is strictly prohibited if cellphones aren't allowed on the shooting range.
          </Text>
          <Text style={styles.whiteText}>
            Your safety and third parties safety are always first; DO NOT use this application if the cellphone is a distraction for you.
          </Text>
          <Text style={styles.whiteText}>
            You must ALWAYS wear earphones, as the sounds can distract other shooters.
            In case of not wearing wireless headphones, pay special attention to the cables.
          </Text>
          <Text style={styles.whiteTextBold}>
            Always keep your cellphone or other electronic devices as far as possible from ammunition or reloading tools.
            Batteries could explode.
          </Text>
        </View>
        
        <Text style={styles.whiteText}>
          Developed by Ing. Lic. Manuel Alejandro Quintana.
        </Text>
        <View style={{flex: 1,alignItems: 'center'}}>
          <TouchableOpacity onPress={visitarWeb}>
            <Image
            resizeMode="contain"
            style={{width:100}}
            source={require('../assets/images/weblink.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.whiteText}>
          2020
        </Text>
          
        
        
      </View>
     
    </ScrollView>
  );
}

function visitarWeb() {
  Linking.openURL('https://mguntech.com');
}

InstructionScreen.navigationOptions = {
  title: 'FPS - How to',
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
