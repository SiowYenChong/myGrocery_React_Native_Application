import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, Alert, } from 'react-native';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        users: [],
        email:'',
        password:'',
    };
    this.login = this.login.bind(this)
}


login(){


  return fetch("http://10.0.2.2:5000/api/user", {
  method:'GET', 
  headers:{
    Accept:'application/json', 
    'Content-Type':'application/json'
    }
})
.then(res => res.json())
.then(data => {  
  var i =data.length;
  var found = false;
  while(i--){
    if(data[i].email ===this.state.email && data[i].password === this.state.password){
      global.userid = data[i].id;
      global.fullname = data[i].fullname;
      global.address = data[i].address;
      global.refresh  = false;
      global.cart= []
      global.cartQuan=[]
      this.props.navigation.navigate("HomeScreen")
      found = true;
      break;
    }
    
  }
  if(found==false){
    Alert.alert("User does not exist. Please try again or register an account.");
 
  }
})
.catch((error) =>{
  console.log(error)
})
}

componentDidMount() {
 
}


  forgetPassword() {
    Alert.alert(
      "Reset Password",
      "Are you sure you want to reset your password?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

        <View>
          <TextInput
            style={styles.Input}
            placeholder="Email"
            keyboardType={'email-address'}
            value={this.state.email}
            onChangeText={text => {
              this.setState({ email:text });
            }}
          />
        </View>

        <View>
          <TextInput
            style={styles.Input}
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={text => {
              this.setState({ password:text });
            }}
          />
        </View>

        <View alignItems='center'>
          <TouchableHighlight
            onPress={() => {
             this.login();
            }}
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Log In</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  Forgot: {
    color: "#24CE85",
    fontWeight: 'bold',
    fontSize: 16,
  },

  Input: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    margin: 10,
    paddingLeft: 20,
  },

  button: {
    marginBottom: 10,
    width: 350,
    alignItems: 'center',
    backgroundColor: '#24CE85',
    borderRadius: 50,
  },

  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
  },

},
);