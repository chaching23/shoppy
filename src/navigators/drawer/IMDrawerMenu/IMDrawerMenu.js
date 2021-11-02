import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, Platform, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useColorScheme } from 'react-native-appearance';
import dynamicStyles from './styles';
import { logout } from '../../../onboarding/redux/auth';
import { IMLocalized } from '../../../localization/IMLocalization';
import IMMenuButton from '../IMMenuButton/IMMenuButton';

const IMDrawerMenu = (props) => {
  const { appStyles, menuItems, menuItemsSettings, authManager, appConfig } =
    props;
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(appStyles, colorScheme);
  const { navigation } = props;
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const defaultProfilePhotoURL =
    'https://www.iosapptemplates.com/wp-content/uploads/2019/06/empty-avatar.jpg';

  const actionLowerMenu = (action) => {
    if (action == 'logout') {
      authManager?.logout(currentUser);
      dispatch(logout());
      navigation.navigate('LoadScreen', {
        appStyles: appStyles,
        appConfig: appConfig,
      });
      return;
    }
    // if(action == 'signUp'){
    //   return ;
    // };
    return;
  };

  const mappingMenuItems = menuItems.map((menuItem) => (
    <IMMenuButton
      title={menuItem.title}
      source={menuItem.icon}
      appStyles={appStyles}
      onPress={() => {
        navigation.navigate(menuItem.navigationPath, {
          appStyles: appStyles,
          appConfig: appConfig,
        });
      }}
    />
  ));

  const mappingMenuSettings = menuItemsSettings.map((menuItemsSetting) => (
    <IMMenuButton
      title={menuItemsSetting.title}
      source={menuItemsSetting.icon}
      appStyles={appStyles}
      onPress={() => {
        actionLowerMenu(menuItemsSetting.action);
      }}
    />
  ));

  const lowerMenu =
    menuItemsSettings.length == 0 ? null : (
      <View>
        <View style={styles.line} />
        {mappingMenuSettings}
      </View>
    );
  return (
    <View style={styles.content}>
      <View
        style={[
          // styles.header,
          {
            // flex: 1,
            flexDirection: 'row',
            marginTop: 50,
            // justifyContent: 'space-around',
            backgroundColor: '#D42227',
          },
        ]}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.icon}
            source={require('../../../../../assets/icons/create.png')}
          />
        </TouchableOpacity>

        <View>
          <Image
            style={styles.imageContainer}
            source={{
              uri:
                currentUser.photoURI ||
                currentUser.profilePictureURL ||
                defaultProfilePhotoURL,
            }}
          />
        </View>
        <View style={styles.phone}>
          <Text style={styles.info}>
            {currentUser.firstName} {currentUser.lastName}
          </Text>
          <Text style={styles.info}>Phone Number</Text>
          <Text style={styles.email}>
            {/* {currentUser.email} */}0 puff points
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.container}>
          {mappingMenuItems}
          {lowerMenu}
        </View>
        <View style={styles.footer}>
          <Text
            style={[
              {
                fontSize: 27.5,
                color: 'red',
              },
            ]}>
            Snag
          </Text>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={[
                {
                  fontSize: 12,
                  color: 'black',

                  marginVertical: 5,
                },
              ]}
              t>
              © 2021 Snag inc.{' '}
            </Text>
            <Text
              style={[
                {
                  fontSize: 12,
                  color: 'black',
                },
              ]}>
              v1.0.0{' '}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default IMDrawerMenu;
