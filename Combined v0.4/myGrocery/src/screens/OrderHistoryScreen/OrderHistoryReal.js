import React, {useState, useEffect, Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from './consts/colors';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const width = Dimensions.get('window').width / 2 - 35;
let config = require('./Config');
const img1 = require('./assets/ProductImg/product1.jpg');
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      isFetching: false,
      showOrderItems:false,
    };
    this._load = this._load.bind(this);

  }

  _load() {
    let url = config.settings.serverPath + '/api/orders';
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
      .then(orders => {
        console.log(orders);
        console.log(orders[0].total_price);
        this.setState({orders: orders});
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this._load();
  }

  render() {
    return (

      <ScrollView style={style.container}>
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
        Order History
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
      <Text>{'\n'}</Text>

      <View>
      <FlatList
      data={this.state.orders}
      refreshing={this.state.isFetching}
      onRefresh={this._load}
      renderItem={({item}) =>{return(
        <TouchableOpacity> 
      <View style={style.itemContainer}>
      <View style={style.orderItem}>
        <Text style={style.text}>
        {item.total_price} 
        </Text>
        <Text  style={style.text}>{item.paid_status}</Text>
    
        </View>
     
      </View>
      
            </TouchableOpacity>
      );
  } }/>
            </View>

    </ScrollView>

   
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  downArrow: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "open-sans-pro",
    fontSize: 17,
    color: "#000",
  },
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 15,
    margin: 15,
    elevation: 2,
  },
  
  header: {
    marginVertical:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontStyle: 'italic',
    flex: 1,
    marginLeft:10,
    color:COLORS.grey,
  },
  categoryListingContainer: {
    marginTop:-20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  categoryBtn: {
    marginRight: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },

  popContainer:{
    backgroundColor:'#000000aa',
    flex:1,
    alignItems: "center",
  },

  popView:{
   backgroundColor:"#ffffff", 
   marginVertical:18,
   width:350,
   maxHeight:650,
   padding:30, 
   flex:1,
  },

});
