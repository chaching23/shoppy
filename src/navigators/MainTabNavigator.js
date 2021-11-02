import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import PickUp from '../screens/PickUp';
import Referrals from '../screens/Referrals';
import Orders from '../screens/Orders';
import HomeStack from './Stacks/HomeStack';
import FastImage from 'react-native-fast-image';
import {colors} from '../theme';

// initialize bottom tab navigator for app
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <FastImage
              style={styles.roundImageProfile}
              source={
                focused
                  ? require('../assests/images/homeP.png')
                  : require('../assests/images/home.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="PickUp"
        component={PickUp}
        options={{
          tabBarLabel: 'PickUp',
          tabBarIcon: ({focused}) => (
            <FastImage
              style={styles.roundImageProfile}
              source={
                focused
                  ? require('../assests/images/pickupP.png')
                  : require('../assests/images/pickup.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Referrals"
        component={Referrals}
        options={{
          tabBarLabel: 'Referrals',
          tabBarIcon: ({focused}) => (
            <FastImage
              style={styles.roundImageProfile}
              source={
                focused
                  ? require('../assests/images/referralsP.png')
                  : require('../assests/images/referrals.png')
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({focused}) => (
            <FastImage
              style={styles.roundImageProfile}
              source={
                focused
                  ? require('../assests/images/ordersP.png')
                  : require('../assests/images/orders.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  roundImageProfile: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 5,
  },
});

export default MainTabNavigator;
