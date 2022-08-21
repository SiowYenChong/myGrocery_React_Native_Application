import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';


export default class editPassword extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentPassword: '',
      newPassword:'',
      confirmPassword:'',
      checkPassText: '',
      cond: false
    }

    

  }


  


  checkPassword(){

    this.setState({cond: false})

    if(this.state.newPassword.length >= 8){
      if(this.state.newPassword === this.state.confirmPassword){

        this.setState({checkPassText: ''})
        if(this.state.currentPassword === this.props.route.params.profile.password){
          this.setState({cond: true})
        }

      }
        else
       this.setState({checkPassText: 'New and confirm password does not match'})
    }
    else{
      this.setState({checkPassText: 'Password must be 8 characters long'})
    }
  }
 
  
  render() {
    this.props.navigation.setOptions({
      title: 'Change Password',
    });

    return (
      
      <View style={styles.container}>
        <View style = {{flex: 1}}>
        <Text style={styles.textStyle}>Current Password</Text> 
              <View style={styles.inputView}>
              <TextInput secureTextEntry= {true} style={styles.TextInput}
               onChangeText={(text) => this.setState({currentPassword: text},this.checkPassword)}/>
          </View>
        
        <Text style={styles.textStyle}>New Password</Text> 
              <View style={styles.inputView}>
              <TextInput secureTextEntry= {true} style={styles.TextInput}
              onChangeText={(text) => this.setState({newPassword: text},this.checkPassword)}/>
          </View>
          
          <Text style={styles.textStyle}>Confirm Password</Text> 
              <View style={styles.inputView}>
              <TextInput secureTextEntry= {true} style={styles.TextInput}
              onChangeText={(text) => this.setState({confirmPassword: text}, this.checkPassword)}/>
              <TextInput style={{color: 'red'}} value ={this.state.checkPassText} editable= {false}></TextInput>
          </View>

        <TouchableOpacity style={styles.loginBtn}
        onPress={this._update}
        >
            <Text style={{fontSize: 15, color: 'white'}}>Save</Text>
          </TouchableOpacity>
          </View>
          <View style = {{flex: 3}}>

          </View>
      </View>

  
    )
  }
}

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#ebebeb',
    borderRadius: 10,
    width: 350,
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    padding: 10,
    secureTextEntry : true,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  loginBtn: {
    width: 350,
    borderRadius: 30,
    height: 50,
    marginBottom: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#24CE85',
  },
});
