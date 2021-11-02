import { StyleSheet, Platform } from 'react-native';
import styles from '../IMMenuButton/styles';

const dynamicStyles = (appStyles, colorScheme) => {
  const colorSet = appStyles.colorSet[colorScheme];
  const fontSet = appStyles.fontFamily;
  return new StyleSheet.create({
    content: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      height: Platform.OS === 'ios' ? '23%' : '25%',
      backgroundColor: Platform.OS === 'ios' ? colorSet.whiteSmoke : '#3066d1',
      display: 'flex',
      flexDirection: 'column',
    },

    info: {
      color: 'white',
      display: 'flex',
      fontFamily: fontSet.main,
      fontWeight: 'bold',
      fontSize: 16,
      // marginLeft: '10%',
      // backgroundColor: 'blue',
      // height: 40,
      // width: 100,
    },
    icon: {
      width: 25,
      height: 25,
      tintColor: appStyles.colorSet[colorScheme].mainThemeForegroundColor,
      marginHorizontal: 5,
    },
    email: {
      color: 'white',
      display: 'flex',
      fontFamily: fontSet.main,
      fontWeight: 'normal',
      marginTop: 5,
      fontSize: 16,
      // marginLeft: '10%',
      // backgroundColor: 'red',
    },

    phone: {
      // backgroundColor: 'yellow',
      width: '50%',

      // height: 80,
      // width: 80,
      // borderRadius: 50,
      // shadowColor: '#006',
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      marginLeft: '8%',
      // shadowOpacity: 0.1,
      // overflow: 'hidden',
      ...Platform.select({
        ios: {
          marginTop: '5%',
          marginBottom: '5%',
        },
        android: {
          marginTop: '10%',
          marginBottom: '5%',
        },
      }),
    },

    imageContainer: {
      height: 80,
      width: 80,
      borderRadius: 50,
      shadowColor: '#006',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      marginLeft: '8%',
      shadowOpacity: 0.1,
      overflow: 'hidden',
      ...Platform.select({
        ios: {
          marginTop: '10%',
          marginBottom: '5%',
        },
        android: {
          marginTop: '10%',
          marginBottom: '5%',
        },
      }),
    },
    container: {
      marginTop: '5%',
      marginLeft: '5%',
    },
    line: {
      borderBottomColor: colorSet.grey9,
      borderBottomWidth: 0.4,
      width: '95%',
      marginBottom: 10,
    },
    footer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 24,
    },
    textFooter: {
      color: colorSet.grey9,
      fontWeight: 'normal',
    },
  });
};

export default dynamicStyles;
