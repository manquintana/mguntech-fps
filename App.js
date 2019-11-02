import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import PracticeScreen from './screens/practiceMode/PracticeScreen';
import TorneoScreen from './screens/tournamentMode/TournamentScreen';
import NavigationService from './navigation/NavigationService';
import HomeScreen from './screens/HomeScreen';
import ExitScreen from './screens/ExitScreen';
import LanguageScreen from './screens/LanguagesScreen';
import InstructionScreen from './screens/InstructionScreen';
import MenuScreen from './screens/MenuScreen';

import soundLibrary from './constants/SoundLibrary';
import Player from './components/Player';

const TopLevelNavigator = createStackNavigator({
  Home: HomeScreen,
  Practice: PracticeScreen,
  Torneo: TorneoScreen,
  Exit: ExitScreen,
  Languages: LanguageScreen,
  Instructions: InstructionScreen,
  Menu: MenuScreen,
},
/* {
  initialRouteName: Home,
} */
);


const AppContainer = createAppContainer(TopLevelNavigator);

export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  

    if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        /* startAsync={this.loadAssets} */
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppContainer ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
      </View>
    );
  }
}



async function loadResourcesAsync() {
  const sounds = Player.load(soundLibrary);
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/logoHome2.png'),
      //require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      //'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
    ...sounds
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

