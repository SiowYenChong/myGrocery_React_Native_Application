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

let config = require('./Config');

export default class EditProfile extends Component {
  constructor(props)
  {
    super(props)

    this.state = {
      profile: '',
      id: '',
      email: '',
      userName: '',
      password:'',
      name: '',
      address: '',
      mobileNo: '',
      userNameAlert: '',
      addressAlert: '',
      mobileNoAlert: ''
    }
    this.submit = this.submit.bind(this)
    this.checkSubmit = this.checkSubmit.bind(this)
    this._update = this._update.bind(this) 
    this._load = this._load.bind(this) 
  }

submit(){

  if(this.state.userName.length <= 0 ){
   this.setState({userNameAlert: 'user name cannot be empty'})
    }
    else
    {
      this.setState({userNameAlert: ''})
    }

    if(this.state.address.length <= 0){
      this.setState({addressAlert: 'address cannot be empty'})
    }
    else
    {
      this.setState({addressAlert: ''})
    }
    
    if(this.state.mobileNo.length == 0){
      this.setState({mobileNoAlert: 'mobile no cannot be empty'})
    }
    else if(this.state.mobileNo.length < 10)
    {
      this.setState({mobileNoAlert: 'mobile no must be in the format of 0123456789'})
    }
    else
    {
      this.setState({mobileNoAlert: ''})
    }
  }
  componentDidMount(){
    this._load()
 }

 _load(){
    let url = config.settings.serverPath + '/api/user/'+global.userid;
    this.setState({isFetching: true});
    fetch(url)
      .then(response => {
        console.log(response);
        if (!response.ok) {
          Alert.alert('Error:', response.status.toString());
          throw Error('Error ' + response.status);
        }
        this.setState({isFetching: false});
        return response.json();
      })
      .then(user => {
        this.setState({userName: user.username});
        this.setState({password: user.password});
        this.setState({name: user.fullname});
        this.setState({mobileNo: user.mobile_no});
        this.setState({email: user.email});
        this.setState({address: user.address});
      })
      .catch(error => {
        console.log(error);
      });
  }


  _update(){
  
    let url = config.settings.serverPath + '/api/user/' + global.userid;

    fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: global.userid,
        username: this.state.userName,
        password: this.state.password,
        fullname: this.state.name,
        mobile_no: this.state.mobileNo,
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
          Alert.alert('Profile updated!')
          // Alert.alert('Record UPDATED for', this.state.name);
        } else {
          Alert.alert('Error in UPDATING');
        }
      
      })
      .catch(error => {
        console.log(error);
      });
  
  
    // this.props.navigation.goBack()
  }

  checkSubmit(){
    if(this.state.userNameAlert.length === 0 && this.state.addressAlert.length === 0 && this.state.mobileNoAlert.length === 0){
      this._update();
      }else{
        Alert.alert('Please fill up all information correctly.')
      }
  }
  




  render() {
  
    this.props.navigation.setOptions({
      title: 'Edit Profile'
    });
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          <View style ={styles.profileContainer}>
            <Image
              source={require('./img/profilepic.jpg')}
              style={styles.image}
            />
          </View>

          <View style={styles.inputContainer}>

            <View>
            <Text style={styles.textStyle}>Email Address</Text>
              <View style={styles.inputView}>
              <TextInput style={styles.TextInput} value={this.state.email} editable={false} />
              </View>
            <Text></Text>

            <Text style={styles.textStyle}>Username</Text>
            <View style={styles.inputView}>
              <TextInput style={styles.TextInput} value={this.state.userName} onChangeText={(text) => this.setState({userName: text}, this.submit)}/>
            </View>
            <Text style={styles.alertStyle}>{this.state.userNameAlert}</Text>

              <Text style={styles.textStyle}>Name</Text>
              <View style={styles.inputView}>
              <TextInput style={styles.TextInput} value={this.state.name} editable={true}/>
              </View>
              <Text></Text>

              <Text style={styles.textStyle}>Address</Text>
              <View style={styles.inputView}>
                <TextInput style={styles.TextInput} value = {this.state.address} onChangeText={(text) => this.setState({address: text},this.submit)}/>
              </View>
              <Text style={styles.alertStyle}>{this.state.addressAlert}</Text>

              <Text style={styles.textStyle}>Mobile Number</Text> 
              <View style={styles.inputView}>
                <TextInput style={styles.TextInput} keyboardType="numeric" value = {this.state.mobileNo} 
                onChangeText={(text) => this.setState({mobileNo: text}, this.submit)}/>
                
              </View>
              <Text style={styles.alertStyle}>{this.state.mobileNoAlert}</Text>
             
            </View>
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress = {this.checkSubmit}>
            <Text style={{fontSize: 15, color: 'white'}}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  alertStyle: {
    color: 'red'
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100
  },

  inputView: {
    backgroundColor: '#ebebeb',
    borderRadius: 10,
    width: 350,
    height: 45,
    marginBottom: 5,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    padding: 10,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: 300,
    borderRadius: 30,
    height: 50,
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#24CE85',
  },
});
