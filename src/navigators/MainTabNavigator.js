import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import { Entypo, MaterialCommunityIcons,FontAwesome5 } from "@expo/vector-icons";
import  {Text, View, StyleSheet} from 'react-native'
import Search from "../screens/Search";
import Explore from "../screens/Explore";
import ProfileStack from './Stacks/ProfileStack';
import HomeStack from './Stacks/HomeStack';
import FastImage from 'react-native-fast-image';
import { colors } from "../theme";

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
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <FastImage
              style={styles.roundImageProfile}
              // source={require("../assests/images/roto.png")}
            />
              // <MaterialCommunityIcons name="home" color={color} size={size} />
            //   <FontAwesome5 name="user" size={24} color="black" />
            ),
          }}
        />
       <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (      
               <FastImage
              style={styles.roundImageProfile}
              // source={require("../assests/images/roto.png")}
            />
              // <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color, size }) => (
              <FastImage
              style={styles.roundImageProfile}
              // source={require("../assests/images/roto.png")}
            />
              // <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />

        <Tab.Screen
          name="Orders"
          component={ProfileStack}
   
          options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({ color, size }) => (       <FastImage
              style={styles.roundImageProfile}
              // source={require("../assests/images/roto.png")}
            />
              // <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
    
  }

  const styles = StyleSheet.create({
    roundImageProfile: {
      width: 45,
      height: 45,
      borderRadius: 45,
      marginTop: 10,
      backgroundColor: 'red'
    },
  });


  
  export default MainTabNavigator;


