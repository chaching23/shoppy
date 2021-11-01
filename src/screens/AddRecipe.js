// import { useMutation, gql } from '@apollo/client';
import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



function AddRecipe({ navigation }) {


  return (
    <View style={{ flex: 1, padding: 10, width: '100%' }}>

  


        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => onPress()}
            style={{
              backgroundColor: '#007aff',
              width: '100%',
              padding: 10,
              marginVertical: 20,
              borderRadius: 5,
            }}>
            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
    
    </View>
  );
}

export default AddRecipe;
