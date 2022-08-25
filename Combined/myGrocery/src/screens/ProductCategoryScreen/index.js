import React, {useState, useEffect, Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from './consts/colors';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const width = Dimensions.get('window').width / 2 - 35;
let config = require('./Config');
const img1 = require('./assets/ProductImg/product1.jpg');



export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      prodData: [],
      prodSearch:null,
      isFetching: false,
      prodname:'',
      prodpic:'',
    };
    this._load = this._load.bind(this);
  }
  _load() {
    let url = config.settings.serverPath + '/api/product/'+global.selected_category;
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
      .then(prodData => {
        console.log(prodData);
        console.log(prodData[0].product_name)
        console.log(prodData[0].pic_url)
        this.setState({prodData: prodData});
        this.setState({prodname: prodData[0].product_name});
        this.setState({prodpic: prodData[0].pic_url});
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
            fontSize: 30,
            backgroundColor: '#24ce85',
            paddingTop: 50,
            fontWeight: 'bold',
            color: 'black'
          }}>
          {global.selected_category}
        </Text>
        <Text
          style={{
            fontSize: 15,
            backgroundColor: '#24ce85',
            paddingTop: 0,
            fontWeight: 'bold',
            marginLeft: -330,
            marginTop: -30,
            color: 'black'
          }}
          onPress={() => this.props.navigation.goBack()}>
          Back
        </Text>
      </View>
      <Text>{'\n'}</Text>
      <View style={{flex: 2, margin: 5,flexDirection:'row'}}>
        <FlatList
          refreshing={this.state.isFetching}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
          onRefresh={this._load}
          data={this.state.prodData}
          renderItem={({item}) => {
            return (
            <View>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('IndividualProductScreen', {
            Aitem: item,
          })}>
              <View style={style.itemContainer}>
                <View style={{ height: 135, alignItems: 'center' }}>
                <Image
                      style={{ 
                        flex: 1,width: 200,height: 200, resizeMode: 'contain' }}
                      source={{uri:item.pic_url}}
                    />
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                  <Text style={{ textAlign: 'center',fontWeight: 'bold', fontSize: 15, marginTop: 10 }}>
                    {item.product_name}
                  </Text>
                </View>

                {/* Touchable */}
                <TouchableOpacity style={{flex: 3, zIndex: 999,justifyContent: 'center',
                    alignItems: 'center'}}  onPress={() => this.props.navigation.navigate('IndividualProductScreen', {
            Aitem: item,
          })}>
                    <View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      flexDirection: 'row',
                      height: 35,
                      width: 105,
                      marginBottom: 25,
                      backgroundColor: '#24ce85',
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{ textTransform:'uppercase',fontSize: 15, color: COLORS.white }}>View</Text>
                  </View>
                </TouchableOpacity>
          
            </View>
      </TouchableOpacity>
    </View>
            );
          }}>

          </FlatList>

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

  itemContainer: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom:10,
    height: 300,
    width,
    marginHorizontal: 1,
    borderRadius: 10,
    padding: 15,
    backgroundColor:COLORS.white,
    shadowColor:COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1.05,
    shadowRadius: 3.84,
    elevation: 5,
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
