import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

let config = require('./Config');

export default class EditPassword extends Component {
  constructor(props){
    super(props)

    this.state = {
      oldPassword:'',
      currentPassword:'',
      newPassword:'',
      confirmPassword:'',
      checkPassText: 'Please fill up the all the details to update password',
      cond: false
    }

    
    this._update = this._update.bind(this)
    this.checkPassword = this.checkPassword.bind(this)
    this.checkSubmit=this.checkSubmit.bind(this)
    this._loadByID = this._loadByID.bind(this);

  }
  componentDidMount() {
    this._loadByID();
  }

  _loadByID() {
    let url = config.settings.serverPath + '/api/user/' + global.userid;
    console.log(url);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          Alert.alert('Error:', response.status.toString());
          throw Error('Error ' + response.status);
        }
        return response.json();
      })
      .then(user=> {
        this.setState({
          oldPassword: user.password,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  _update(){
  
    let url = config.settings.serverPath + '/api/update_user_pass/' + global.userid;

    fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: global.userid,
        password: this.state.newPassword,
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
          Alert.alert('Password updated!')
    
          this.props.navigation.goBack()
        } else {
          Alert.alert('Error in UPDATING');
        }
      
      })
      .catch(error => {
        console.log(error);
      });
  
  
  }
  


  checkPassword(){

    if(this.state.newPassword.length >= 6){
      if(this.state.newPassword === this.state.confirmPassword){

       
        if(this.state.currentPassword === this.state.oldPassword){
          this.setState({checkPassText: ''})
       
        }else{
          this.setState({checkPassText: 'Current password does not match'})
          console.log(this.state.oldPassword)
        }
      }
        else
       this.setState({checkPassText: 'New and confirm password does not match'})
    }
    else{
      this.setState({checkPassText: 'Password must be 6 characters long'})
    }
  }

  checkSubmit(){
    if(this.state.checkPassText.length===0){
      this._update();
      }else{
        Alert.alert("Please fill up the all the details correctly to update password");
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
              <TextInput style={{color: 'red'}} value ={this.state.checkPassText} editable= {true}></TextInput>
          </View>

        <TouchableOpacity style={styles.loginBtn}
        onPress={this.checkSubmit}
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
