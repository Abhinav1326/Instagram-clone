import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { usefont } from '@expo-google-fonts'

import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';


export default function App() {
  return (
    <View style={styles.container}>

      {/* <HomeScreen /> */}
      <ProfileScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: '100%',
    width: '100%'
  },

  container2: {

  },

});
