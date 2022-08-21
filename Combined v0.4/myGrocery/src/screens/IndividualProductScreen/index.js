import React, {useState, useEffect} from 'react';
import {  TouchableOpacity , FlatList, Modal,Image} from 'react-native';
import { Text, View, Alert, StyleSheet,Dimensions, TextInput, ScrollView} from 'react-native';
import {CheckButton, FeeDisplay} from './components/Custom_Pay';
import ProductImg from './components/Custom_Product';
 import NumericInput from 'react-native-numeric-input';
import { Icon } from 'react-native-vector-icons/AntDesign';
// import { green100 } from 'react-native-paper/lib/typescript/styles/colors';
// import GlobalStyle  from '../components/GlobalStyle';
// import { createBottomTabNavigator } from 

const widthscreen = Dimensions.get('screen').width;
const itemspace = 10;
const widthrow = (widthscreen - 3 * itemspace) / 2;
const ratio = 3 / 4;

const Product = ({route,navigation}) => {

  const[quan,setQuan] = useState(1);

  function loadCart(id){
    
   //const cartObj = {id,quan}
   Aitem['qty'] = quan;
    if(global.cart.length==0){
           
      global.cart.push(Aitem);
      
    }
      
    else{//alr have item
      var index = global.cart.findIndex(obj => obj.id === id);
      if(index!==-1){
        global.cart[index]['qty']+=quan;
      }
      else{
        global.cart.push(Aitem);
        
      }
    }
    global.refresh = true;
  }
  
  const {Aitem} = route.params;
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
      Product Category
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
          onPress={() => navigation.goBack()}>
          Back
        </Text>
      </View>
      <Text>{'\n'}</Text>
    <View style={{backgroundColor:'rgb(255, 255, 255)', flex: 1}}>

        

<View style={styles.prodImage}>
      <ProductImg
        isProductPage 
        imageSource={{uri:Aitem.pic_url}}
      />
</View>
      <View style={styles.prodDetails}>

        <Text style={styles.name}>
           {Aitem.name} 
        </Text>

        <Text style={styles.price}>
          RM {Aitem.price.toFixed(2)}
        </Text>

      
      
      <TextInput style={styles.proddesc}
      multiline editable={false}
      >
        Category : {Aitem.category}
      </TextInput>

      {/* the quantity bar at here - i didn't do styling */}
      {
              <NumericInput 
              value={quan} 
              onChange={prod=>setQuan(prod)} 
              minValue = {1}
              initValue = {quan}
              totalWidth={240} 
              totalHeight={50} 
              iconSize={25}
              step={1}
              valueType='real'
              bcolor='#B0228C' 
              rounded 
              textColor='#B0228C' 
              iconStyle={{ color: 'white' }} 
              rightButtonBackgroundColor='green' 
              leftButtonBackgroundColor='green'/>
      
      /* <NumericInput 
            value={quan} 
            onChange={prod=>setQuan(prod)} 
            minValue = {1}
            initValue = {quan}
            type='up-down'

            totalWidth={240} 
            totalHeight={50} 
            iconSize={25}
            step={1.5}
            valueType='integer'
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            upDownButtonsBackgroundColor = 'green'
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'
      /> */}

      </View>
      
      <View style={{flexDirection: 'column',backgroundColor: '#fff', paddingBottom:15 }}>
      <CheckButton style = {{borderRadius:40}}center={widthscreen/55} 
        label={"Add To Cart"}
        borderRadius={40}
        onPress={() => [Alert.alert("Product Added"),navigation.goBack(), loadCart(Aitem.id)]}
         bcolor="#24CE85"
         tcolor="white"
         icon="shopping-cart"       
          alignItems= 'center'
        isize={30}
      />     
</View>   
    </View>
    </ScrollView>


    
  );
};

const styles = StyleSheet.create({
	
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    prodDetails:{
      marginLeft:30,
      paddingBottom:30,
    },

    name: {
      fontWeight: 'bold',
      marginTop: 10,
      fontSize: 27,
      color: '#161925',
      width:widthscreen,
    },
    background: {
    position: 'absolute',
    left: 0,
    right: 150,
    top: 0,
    height: Dimensions.get("screen").height,
    width: widthscreen/2,
    },
    
    price: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e90ff',
        width: widthscreen,
        
    },
    proddesc: {
        height:50,
        marginTop: 1,
        fontWeight: '20',
        marginBottom:1,
        fontSize: 20,
        color: '#94989f',
        width: widthscreen-20,
    },

    prodImage: {
      height:350,
      width:350,
    }
});

export default Product;