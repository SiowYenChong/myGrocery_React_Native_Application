import React, { Component} from "react";
import {StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "./Profile";
import editProfile from "./editProfile"
import editPassword from "./editPassword"
import contactUs from "./contactUs"
import TermsAndCondition from "./TermsAndCondition"
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class App extends Component{

    render()
    {
        return(
      <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile} options = {styles.ProfileHeader}></Stack.Screen>
      <Stack.Screen name='editProfile' component={editProfile} options ={styles.editProfileHeader}></Stack.Screen>
      <Stack.Screen name='editPassword' component={editPassword} options ={styles.editPasswordHeader}></Stack.Screen>
      <Stack.Screen name='contactUs' component={contactUs} options ={styles.contactUsHeader}></Stack.Screen>
      <Stack.Screen name='TermsAndCondition' component={TermsAndCondition} options ={styles.TermsnConditionHeader}></Stack.Screen>
     </Stack.Navigator>
   
        );

    }

}

const styles = StyleSheet.create({

ProfileHeader: {
    title: 'Profile',
    headerShown: false,
    headerStyle: {
      backgroundColor: '#24CE85',
    },
    headerTitleAlign: 'center',
    headerTintColor: 'black',
    headerTitleStyle: {
      color: '#000000',
      fontWeight: 'bold',
    },
  },
  editProfileHeader: {
    title: 'Edit Profile',

    headerTitleAlign: 'center',
    headerTintColor: 'black',
    headerTitleStyle: {
      color: '#000000',
      fontWeight: 'bold',
    },
  },

  editPasswordHeader: {
    title: 'Edit Password',
    headerTitleAlign: 'center',
    headerTintColor: 'black',
    headerTitleStyle: {
      color: '#000000',
      fontWeight: 'bold',
    },
  },

  contactUsHeader: {
    title: 'Contact Us',
    headerTitleAlign: 'center',
    headerTintColor: 'black',
    headerTitleStyle: {
      color: '#000000',
      fontWeight: 'bold',
    },
  },
  TermsnConditionHeader: {
    title: 'Terms and Condition',
    headerTitleAlign: 'center',
    headerTintColor: 'black',
    headerTitleStyle: {
      color: '#000000',
      fontWeight: 'bold',
    },
  },
})