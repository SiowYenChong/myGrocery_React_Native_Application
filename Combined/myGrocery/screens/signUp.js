import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,TouchableHighlight, Alert,ScrollView } from 'react-native';
let config = require('../Config');


export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fullname: '',
      mobile_no: '',
      email: '',
      address: '',
      userNameAlert: '   Please fill up the username.',
      passAlert: '   Please fill up the password.',
      fullNameAlert: '   Please fill up the your full name.',
      addressAlert: '   Please fill up the address.',
      mobileNoAlert: '   Please fill up the mobile number',
      emailAlert: '   Please fill up the email address',
    };
    this.submit = this.submit.bind(this)
    this.checkSubmit = this.checkSubmit.bind(this)
  
  }

    submit(){
      const re = /\S+@\S+\.\S+/

      if (this.state.password.length<6){
        this.setState({passAlert: '   Password must be at least 6 characters long.'})
      }
      else if(this.state.password.length > 0 ){
        this.setState({passAlert: ''})
         }
         else
         {
          this.setState({passAlert: '   Full name cannot be empty'})
         }

      if(!re.test(this.state.email)){
        this.setState({emailAlert: '   Ops! We need a valid email address.'})
         }
         else if (this.state.email.length > 0)
         {
          this.setState({emailAlert: ''})
         }else{
          this.setState({emailAlert: '   Email cannot be empty'})
         }
      
      if(this.state.fullname.length > 0 ){
        this.setState({fullNameAlert: ''})
         }
         else
         {
          this.setState({fullNameAlert: '   Full name cannot be empty'})
         }

      if(this.state.username.length > 0 ){
        this.setState({userNameAlert: ''})
        }
        else
        {
          this.setState({userNameAlert: '   Username cannot be empty'})
        }
    
        if(this.state.address.length > 0){
          this.setState({addressAlert: ''})
        }
        else
        {
          this.setState({addressAlert: '   Address cannot be empty'})
         
        }
        
     if(this.state.mobile_no.length < 10)
        {
          this.setState({mobileNoAlert: '   Mobile number must be in the format of 01xxxxxxxx'})
        }else  if(this.state.mobile_no.length >0){
          this.setState({mobileNoAlert: ''})
        }
        else
        {
          this.setState({mobileNoAlert: '   Mobile no cannot be empty'})
       
        }
      }


      
    _save() {
      let url = config.settings.serverPath + '/api/user';
  
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          fullname:this.state.fullname,
          mobile_no: this.state.mobile_no,
          email: this.state.email,
          address: this.state.address,
    
        
        }),
      })
        .then(response => {
          console.log(response);
          if (!response.ok) {
            Alert.alert('Error:', response.status.toString());
            throw Error('Error ' + response.status);
          }
  
          return response.json();
        })
        .then(respondJson => {
          if (respondJson.affected > 0) {
            Alert.alert(
              "Sign Up",
              "Sign Up Successfully!",
              [
                {
                  text: "Log In", onPress:() =>
                    this.props.navigation.navigate('Login')
                }
              ]
            );
          } else {
            Alert.alert('Error in saving');
          }
        })
        .catch(error => {
          console.log(error);
          Alert.alert('Registration Failed. Same email has been used by someone.');
        });
    }


  checkSubmit(){
    if(this.state.fullNameAlert.length===0 && this.state.userNameAlert.length === 0 && this.state.addressAlert.length === 0 
      && this.state.mobileNoAlert.length === 0&&this.state.passAlert.length===0&&this.state.emailAlert.length===0){
      this._save();
      }else{
        Alert.alert("Please fill up all the required information.");
      }
  }

  render() {

    let user = this.state.user;

    return (
      <ScrollView>
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

        <View>
          <TextInput
            style={styles.Input}
            placeholder="Name"
            value={this.state.fullname}
            onChangeText={(text) => {this.setState({fullname: text},this.submit())}}
          />
        </View>
        <Text style={styles.alertStyle}>{this.state.fullNameAlert}</Text>
        <View>
          <TextInput
            style={styles.Input}
            placeholder="Email"
            keyboardType={'email-address'}
            value={this.state.email}
            onChangeText={text => {
              this.setState({ email:text },this.submit());
            }}
          />
        </View>
        <Text style={styles.alertStyle}>{this.state.emailAlert}</Text>

        <View>
          <TextInput
            style={styles.Input}
            placeholder="Username"
            value={this.state.username}
            onChangeText={username => {
              this.setState({ username: username }, this.submit);
            }}
          />
        <Text style={styles.alertStyle}>{this.state.userNameAlert}</Text>
        </View>

        <View>
          <TextInput
            style={styles.Input}
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => {
              this.setState({ password:password }, this.submit);
            }}
          />
        </View>
        <Text style={styles.alertStyle}>{this.state.passAlert}</Text>
        <View>
          <TextInput
            style={styles.Input}
            placeholder="Address"
            value={this.state.address}
            onChangeText={address => {
              this.setState({ address:address }, this.submit);
            }}
          />
        </View>
        <Text style={styles.alertStyle}>{this.state.addressAlert}</Text>
        <View >
          <TextInput
            style={styles.Input}
            placeholder="Mobile Number (eg: 01xxxxxxxx)"
            keyboardType='number-pad'
            value={this.state.mobile_no}
            onChangeText={mobile_no => {
              this.setState({ mobile_no },this.submit);
            }}
          />
        </View>
        <Text style={styles.alertStyle}>{this.state.mobileNoAlert}</Text>

        <View alignItems='center'>
          <TouchableHighlight
            onPress={() => {
            this.submit();
              this.checkSubmit();
            }}
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      </ScrollView>
    );
  }

 

}

const styles = StyleSheet.create({
  alertStyle: {
    color: 'red',
   marginBottom: 10,
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
}
);