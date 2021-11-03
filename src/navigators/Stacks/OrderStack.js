import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Profile from '../../screens/Profile';
import Cart from '../../screens/Cart';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Orders from '../../screens/Orders';
import FastImage from 'react-native-fast-image';

// initialize stack navigator for home screens
const MainStack = createStackNavigator();

const OrderStack = ({navigation}) => {
  return (
    <MainStack.Navigator
      screenOptions={{...TransitionPresets.ModalSlideFromBottomIOS}}>
      <MainStack.Screen
        name="Dumpling"
        component={Orders}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={styles.rightIcon}>
              <FastImage
                style={styles.roundImageProfile}
                source={require('../../assests/images/home.png')}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={styles.leftIcon}>
              <FastImage
                style={styles.roundImageProfile}
                source={require('../../assests/images/pickup.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <MainStack.Screen name="Profile" component={Profile} />
      <MainStack.Screen name="Cart" component={Cart} />
    </MainStack.Navigator>
  );
};

export default OrderStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  leftIcon: {
    marginLeft: 15,
  },
  rightIcon: {
    marginRight: 15,
  },

  roundImageProfile: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginTop: 0,
    marginBottom: 5,
  },
});
