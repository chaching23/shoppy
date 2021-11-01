/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./src/navigators/MainTabNavigator.js";
import linking from './src/linking.js';

const App  = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Text>{data? JSON.stringify(data) : "App notopen from link"}</Text> */}
        <NavigationContainer linking={linking}>
         
          <MainTabNavigator  />
         {/* <RootStack.Navigator screenOptions={{
           headerShown: false
         }}>
         <RootStack.Screen name="MainTab" component={MainTabNavigator} />
         </RootStack.Navigator> */}
        </NavigationContainer>
    

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
