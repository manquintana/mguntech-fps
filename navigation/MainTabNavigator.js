import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import InstructionScreen from '../screens/InstructionScreen';
import LanguagesScreen from '../screens/LanguagesScreen';
import ExitScreen from '../screens/ExitScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});




const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Menú Principal',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';




const InstructionStack = createStackNavigator(
  {
    Instructions: InstructionScreen,
  },
  config
);

InstructionStack.navigationOptions = {
  tabBarLabel: 'Modo de uso',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'} />
  ),
};

InstructionStack.path = '';




const LanguagesStack = createStackNavigator(
  {
    Languages: LanguagesScreen,
  },
  config
);

LanguagesStack.navigationOptions = {
  tabBarLabel: 'Idioma',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
  ),
};

LanguagesStack.path = '';












const ExitStack = createStackNavigator(
  {
    Salir: ExitScreen,
  },
  config
);

ExitStack.navigationOptions = {
  tabBarLabel: 'Salir',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-exit' : 'md-exit'} />
  ),
};

ExitStack.path = '';



const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    InstructionStack,
    LanguagesStack,
    ExitStack
  },
  {
    tabBarOptions : {
      style: {
        backgroundColor: '#071B40',
        borderTopColor: '#071B40'
      }
    }
  }
);


tabNavigator.path = '';




export default tabNavigator;
