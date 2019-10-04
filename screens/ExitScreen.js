import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler
} from 'react-native';


export default function ExitScreen() {
  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.fiftyPixelMargins}>
       
          <Text style={styles.tituloSeccion}>
            ¿Seguro desea salir?
          </Text>
  
          <TouchableOpacity
            style={styles.bigButtons}
            onPress ={
              ()=>{return BackHandler.exitApp();}
            }
          >
            <Text style={styles.bigButtonsText}>Salir</Text>
          </TouchableOpacity>
          
      </ScrollView>
    </View>
  );
}

ExitScreen.navigationOptions = {
  title: 'FPS - Salir',
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
    marginTop:30,
    marginBottom:30
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