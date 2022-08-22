/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import navigation from '@react-navigation/native';

const Dashboard = ({ navigation }) => {
  return (
    <ScrollView >
      <View style={{ width: 320 }}>

        <View
          style={{
            backgroundColor: '#24ce85',
            height: 150,
            width: Dimensions.get('screen').width,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 35,
              backgroundColor: '#24ce85',
              paddingTop: 60,
              fontWeight: 'bold',
              color: 'black'
            }}>
            Dashboard
          </Text>
        </View>


        <Text
          style={{
            fontSize: 30,

            paddingTop: 30,
            fontWeight: 'bold',
            color: '#24ce85',
            textAlign: 'center'
          }}>
        {global.fullname}
        </Text>
        <Text>{'\n'}</Text>


        <TouchableOpacity
          style={{
            width: 300,
            height: 50,
            borderRadius: 40,
            backgroundColor: '#24ce85',
            alignItems: 'center',
            alignSelf: 'center',
            textAlign: 'center',
          }}
        onPress={() => navigation.navigate('OrderHistory')}
        >
          <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>
            Order History
          </Text>
        </TouchableOpacity>

        <Text>{'\n'}</Text>
        <TouchableOpacity
          style={{
            width: 300,
            height: 50,
            borderRadius: 40,
            marginTop: 20,
            backgroundColor: '#24ce85',
            alignItems: 'center',
            alignSelf: 'center',
            textAlign: 'center',
          }}
        onPress={() => navigation.navigate('Profiletab')}
        >
          <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>
            Profile
          </Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>

      

        <TouchableOpacity
          style={{
            width: 300,
            height: 50,
            borderRadius: 40,
            marginTop: 20,
            backgroundColor: '#24ce85',
            alignItems: 'center',
            alignSelf: 'center',
            textAlign: 'center',
          }}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={{ color: 'white', fontSize: 20, padding: 10 }}
          >
            About Us
          </Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>

        <TouchableOpacity
          style={{
            width: 300,
            height: 50,
            borderRadius: 40,
            marginTop: 20,
            backgroundColor: '#24ce85',
            alignItems: 'center',
            alignSelf: 'center',
            textAlign: 'center',
          }}
        onPress={() => navigation.navigate('Welcome')}
        >
          <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>Log Out</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
        <StatusBar style="auto" />
        <Text>{'\n'}</Text>
      </View>

    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
