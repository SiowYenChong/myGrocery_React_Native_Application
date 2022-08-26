import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


export default class ContactUs extends Component {
  render() {
    return (
      <View style={styles.container}>
  
             <TouchableOpacity  style = {{marginTop: 30, marginLeft: 25, marginBottom: 10}}
             onPress={() => {
                this.props.navigation.navigate('TermsAndCondition');
              }}>
                <Text>Terms and Condition</Text></TouchableOpacity>
    


        <View style={styles.inputView}>
             <Text style={{marginRight: 150}}>Email Us </Text>
            <Text>grocery@gmail.com</Text>
    
        </View>
        <View style={styles.inputView}>
        <Text style={{marginRight: 190}}>Help Line </Text>
            <Text>1300888333</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'left',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  inputView: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
    marginRight: 30,
    borderRadius: 10,
    height: 45,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

});
