import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";

import AddRecipe from "../../screens/AddRecipe";
import Profile from "../../screens/Profile";
import { TouchableOpacity, StyleSheet ,Text} from 'react-native';

const MainStack = createStackNavigator();


const  ProfileStack = ({ navigation }) => {
    return (
      <MainStack.Navigator>
        
        <MainStack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("MyModal")}
                style={styles.rightIcon}
              >
                <Entypo name="plus" size={26} color="#24cc94" />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                // onPress={() => navigation.navigate("EditRecipe")}
                style={styles.leftIcon}
              >
                <Feather name="menu" size={26} color="#24cc94" />
                <Text>hhd</Text>
              </TouchableOpacity>
            ),
          }}
        />
        {/* <MainStack.Screen name="Details" component={DetailsScreen} /> */}
        <MainStack.Screen name="EditRecipe" component={AddRecipe} />
        <MainStack.Screen name="Add" component={AddRecipe} />
        {/* <MainStack.Screen name="ViewRecipe" component={Show} /> */}
        {/* <MainStack.Screen name="History" component={History} /> */}
      </MainStack.Navigator>
    );
  }

  export default ProfileStack

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    topBar: {
      flexDirection: "row",
      backgroundColor: "white",
    },
    leftIcon: {
      marginLeft: 15,
    },
    rightIcon: {
      marginRight: 15,
    },
  });
  