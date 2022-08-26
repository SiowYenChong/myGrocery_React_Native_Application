/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const About = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          backgroundColor: '#24ce85',
          height: 130,
          width: Dimensions.get('screen').width,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 35,
            backgroundColor: '#24ce85',
            paddingTop: 50,
            fontWeight: 'bold',
            color: 'black'
          }}>
          About Us
        </Text>
        <Text
          style={{
            fontSize: 15,
            backgroundColor: '#24ce85',
            paddingTop: 0,
            fontWeight: 'bold',
            marginLeft: -270,
            marginTop: -30,
            color: 'black'
          }}
          onPress={() => navigation.goBack()}>
          Back
        </Text>
      </View>
      <Text>{'\n'}</Text>

      <Text style={{ fontSize: 30, fontWeight: '500', padding: 20, color: 'black' }}>
        myGrocery
      </Text>

      <Image
        source={require('../../assets/image_two.jpeg')}
        style={{ width: 347, height: 97, alignSelf: 'center' }}
      />

      <Text style={{ fontSize: 30, fontWeight: '400', padding: 15, color: 'black' }}>
        myGrocery
      </Text>

      <Text style={{ fontSize: 20, fontWeight: '700', padding: 15, color: 'black' }}>
        Trusted Company to Delight One's Heart Everyday
      </Text>
      <Text style={{ fontSize: 20, fontWeight: '400', padding: 15, color: 'black' }}>
        Founded by Jeffery Cheah back in 2008. Since pandemic strikes he strives
        to open an online store.
      </Text>
      <Text style={{ fontSize: 20, fontWeight: '400', padding: 15, color: 'black' }}>
        Now, there are up to 10,000 orders made per day with myGrocery
      </Text>
      <Image
        source={require('../../assets/image_one.jpeg')}
        style={{ width: 347, height: 97, alignSelf: 'center' }}
      />
      <Text style={{ fontSize: 25, fontWeight: '700', padding: 15, color: 'black' }}>
        Founder
      </Text>

      <Text style={{ fontSize: 20, fontWeight: '400', padding: 15, color: 'black' }}>
        Mr Jeffery Cheah
      </Text>
      <Text style={{ fontSize: 20, fontWeight: '400', padding: 15, color: 'black' }}>
        From humble backgrounds, Mr Cheah at 25 aimed to transform his father’s
        grocery store into e-stores. Along with his co-founder, Ms Denise they
        had built one of the largest e-Grocery chain in Malaysia.
      </Text>

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default About;
