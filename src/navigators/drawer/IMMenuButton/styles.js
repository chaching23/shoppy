import { StyleSheet } from 'react-native';

const dynamicStyles = (appStyles, colorScheme) => {
  const colorSet = appStyles.colorSet[colorScheme];
  const fontSet = appStyles.fontFamily;
  return new StyleSheet.create({
    btnClickContain: {
      flexDirection: 'row',
      padding: 5,
      marginTop: 0,
      marginBottom: 0,
      backgroundColor: 'white',
    },
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor: 'white',
      padding: 7,
      // borderTopWidth: 1,
      // borderColor: 'grey',
    },
    btnIcon: {
      tintColor: '#D42227',
      height: 30,
      width: 30,
    },
    btnText: {
      fontFamily: fontSet.main,
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 5,
      color: 'grey',
    },
    icon: {
      width: 25,
      height: 25,
      tintColor: 'grey',
      marginHorizontal: 5,
    },
  });
};

export default dynamicStyles;
