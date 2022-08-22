import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, ScrollView, Image, Dimensions,} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';


export default class Profile extends Component {

  constructor(props){
    super(props)
    
  

    
}


  render() {
    return (
  
        <View style={styles.container}>
         <View
        style={{
          backgroundColor: '#24ce85',
          width: Dimensions.get('screen').width,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 35,
            backgroundColor: '#24ce85',
            fontWeight: 'bold',
            color: 'black'
          }}>
        Profile
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
          onPress={() => this.props.navigation.goBack()}>
          Back
        </Text>
      </View>
        
          <View style={styles.container1}>
          
          <Image
              source={require('./img/profilepic.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.container2}>
          <TouchableOpacity style={styles.Btn} onPress={() => {
                this.props.navigation.navigate('EditProfile');
              }}>
            <Text style={styles.BtnText}>Edit My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Btn} onPress={() => {
                this.props.navigation.navigate('OrderHistory')
              }}>
            <Text style={styles.BtnText}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Btn} onPress={() => {
                this.props.navigation.navigate('EditPassword')
              }}>
            <Text style={styles.BtnText}>Edit Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Btn} onPress={() => {
                this.props.navigation.navigate('ContactUs');
              }}>
            <Text style={styles.BtnText}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Btn} onPress={() => {
                this.props.navigation.navigate('Welcome');
              }}>
            <Text style={styles.BtnText}>Log Out</Text>
          </TouchableOpacity>
          </View>
          </View>


    );
  }
}

var styles = StyleSheet.create({
  Btn: {
    width: 350,
    borderRadius: 30,
    height: 50,
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#24CE85',

  },
  BtnText: {
    fontSize: 15,
    color: 'white',
  },
  container: {
    flex: 1,
  },
  container1: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#24CE85',
  },
  container2: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center',
    top: 5

  },
  image: {
    borderWidth: 3,
    borderRadius: 100,
    marginTop: 50,
    borderColor: 'white',
    marginBottom: 60,
    width: 150,
    height: 150,
  },
});
