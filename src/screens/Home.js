import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
// import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          // onPress={() => onPress()}
          style={styles.button}>
          <Text style={{color: 'blue', fontSize: 20, textAlign: 'center'}}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    // backgroundColor: 'blue',
    justifyContent: 'center',
  },
  button: {
    // backgroundColor: '#007aff',
    width: '100%',
    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
  },
});
