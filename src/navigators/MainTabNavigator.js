import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, } from "@expo/vector-icons";
import  {Text, View} from 'react-native'

// import Show from "./src/screens/Show.js";
import AddRecipe from "../screens/AddRecipe";
// import Edit from "./src/screens/Edit";
import ProfileStack from './Stacks/ProfileStack';

const H = () => (
  <View style={{flex:1, justifyContent: 'center', backgroundColor: 'red'}}>
    <Text>HOME</Text>
  </View> 
)

const Tab = createBottomTabNavigator();
const MainTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Home"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={AddRecipe}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={H}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  
  export default MainTabNavigator;