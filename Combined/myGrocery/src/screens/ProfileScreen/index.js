import React, { Component} from "react";
import {StyleSheet} from "react-native";
import Profile from "./Profile";
import EditProfile from "./EditProfile"
import EditPassword from "./EditPassword"
import ContactUs from "./ContactUs"
import TermsAndCondition from "./TermsAndCondition"
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class App extends Component{

    render()
    {
        return(
      <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile} options = {styles.ProfileHeader}></Stack.Screen>
      <Stack.Screen name='EditProfile' component={EditProfile} options ={styles.editProfileHeader}></Stack.Screen>
      <Stack.Screen name='EditPassword' component={EditPassword} options ={styles.editPasswordHeader}></Stack.Screen>
      <Stack.Screen name='ContactUs' component={ContactUs} options ={styles.contactUsHeader}></Stack.Screen>
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