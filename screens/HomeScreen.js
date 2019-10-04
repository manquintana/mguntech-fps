import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Divider
} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        
        {/* <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View> */}

        <View style={styles.getStartedContainer}>
          {/* <DevelopmentModeNotice /> */}

          <Text style={styles.tituloSeccion}>
            Seleccione modo
          </Text>
  
          <TouchableOpacity
            style={styles.bigButtons}
            /* onPress={() => {}}  */
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

        </View>
      </ScrollView>
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

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
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
