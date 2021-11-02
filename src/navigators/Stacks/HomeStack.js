import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Profile from '../../screens/Profile';
import Cart from '../../screens/Cart';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Home from '../../screens/Home';
import FastImage from 'react-native-fast-image';
import {colors} from '../../theme';

const MainStack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <MainStack.Navigator
      screenOptions={{...TransitionPresets.ModalSlideFromBottomIOS}}>
      <MainStack.Screen
        name="Dumpling"
        component={Home}
        options={{
          headerTitleStyle: {
            // backgroundColor: colors.primary,
            color: 'red',
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={styles.rightIcon}>
              <FastImage
                style={styles.roundImageProfile}
                source={require('../../assests/images/plus.png')}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={styles.leftIcon}>
              <FastImage
                style={styles.roundImageProfile}
                source={require('../../assests/images/menu.png')}
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

export default HomeStack;

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
