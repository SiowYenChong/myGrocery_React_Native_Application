import welcome from "./screens/welcome";
import login from "./screens/login";
import signUp from "./screens/signUp"
import homeScreen from "./screens/HomeScreen"
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const StackNav = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StackNav.Navigator initialRouteName="Welcome">
          <StackNav.Screen
            name="Welcome"
            component={welcome}
            options={styles.WelcomeHeader}
          />
          <StackNav.Screen
            name="SignUp"
            component={signUp}
            options={styles.SignUpHeader}
          />
          <StackNav.Screen
            name="Login"
            component={login}
            options={styles.LoginHeader}
          />
          <StackNav.Screen
            name="HomeScreen"
            component={homeScreen}
            options={{headerShown: false}}
            // options={styles.LoginHeader}
          />
        </StackNav.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  
  LoginHeader: {
    title: 'Log In',
    headerStyle: {
      backgroundColor: '#FFFFFF',
    },
    headerTitleAlign: 'center',
    headerTintColor: 'black',
    headerTitleStyle: {
      color: '#000000',
      fontWeight: 'bold',
    },
  },

  SignUpHeader: {
    title: 'Sign Up',
    headerStyle: {
      backgroundColor: '#FFFFFF',
    },
    headerTitleAlign: 'center',
    headerTintColor: 'black',
    headerTitleStyle: {
      color: '#000000',
      fontWeight: 'bold',
    },
  },

  WelcomeHeader: {
    title: '',
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


});