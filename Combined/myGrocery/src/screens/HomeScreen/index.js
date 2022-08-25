/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, TextInput } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Home = ({ navigation }) => {


  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 30,
            alignItems: 'center',
            marginBottom: -30,
          }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={require('../../assets/h.jpeg')}
              style={{ width: 30, height: 25, marginTop: 45, marginLeft: 40 }}
            />
          </TouchableOpacity>
          <Text style={styles.title}>myGrocery</Text>
        </View>
        {/* <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="black"
          textAlign="left"
        /> */}
      </View>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 15,
            color: 'black',
          }}>
          Promotions
        </Text>
        <Text
          style={{
            fontStyle: 'italic',
            marginLeft: 15,
            marginTop: 3,
            color: 'black',
          }}
          onPress={() => navigation.navigate('Search')}>
          For our valued customers
        </Text>
        <ScrollView horizontal={true}>
          <Image
            style={{ width: 370, height: 150, marginTop: 20 }}
            source={require('../../assets/ads.png')}
          />
          <Image
            style={{ width: 370, height: 150, marginTop: 20 }}
            source={require('../../assets/z.jpeg')}
          />
        </ScrollView>
        <Text style={styles.header}>myGrocery Departments</Text>
        <Text
          style={{
            fontStyle: 'italic',
            marginLeft: 30,
            marginTop: 10,
            color: 'black',
          }}>
          Our best-selling, new releases
        </Text>
      </View>
      <View style={styles.items}>
      <TouchableOpacity  onPress={() => {navigation.navigate('Product_category');global.selected_category='Bakery'}}>
        <View>
       
          <Image
            style={{ width: 130, height: 130, marginLeft: 30, marginTop: 20 }}
            source={require('../../assets/item_one.png')}
          />
          <Text
          style={{
            fontStyle: 'italic',
            marginLeft: 30,
            marginTop: 10,
            color: 'black',
          }}>
          Bakery
        </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {navigation.navigate('Product_category');global.selected_category='Chilled and Frozen'}}>
        <View>
          <Image
            style={{ width: 130, height: 130, marginLeft: 60, marginTop: 20 }}
            source={require('../../assets/item_two.png')}
          />
          <Text
          style={{
            fontStyle: 'italic',
            marginLeft: 60,
            marginTop: 10,
            color: 'black',
          }}>
          Chilled and Frozen
        </Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.items}>
      <TouchableOpacity  onPress={() => {navigation.navigate('Product_category');global.selected_category='Fresh Product'}}>
        <View>
          <Image
            style={{ width: 130, height: 130, marginLeft: 30, marginTop: 20 }}
            source={require('../../assets/e.jpeg')}
          />
          <Text
          style={{
            fontStyle: 'italic',
            marginLeft: 30,
            marginTop: 10,
            color: 'black',
          }}>
          Fresh Product
        </Text>

        </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => {navigation.navigate('Product_category');global.selected_category='Household'}}>
        <View>
          <Image
            style={{ width: 150, height: 130, marginLeft: 60, marginTop: 20 }}
            source={require('../../assets/s.jpeg')}
          />
          <Text
          style={{
            fontStyle: 'italic',
            marginLeft: 60,
            marginTop: 10,
            color: 'black',
          }}>
          Household
        </Text>

        </View>
        </TouchableOpacity>

      </View>

      <TouchableOpacity  onPress={() => {navigation.navigate('Product_category');global.selected_category='Food and Beverage'}}>
      <View>
        <Image
          style={{ width: 130, height: 130, marginLeft: 30, marginTop: 20 }}
          source={require('../../assets/ff.png')}
        />

        <View>
        <Text
          style={{
            fontStyle: 'italic',
            marginLeft: 30,
            marginTop: 10,
            color: 'black',
          }}>
          Food and Beverages
        </Text>
        </View>
        <View style={{ opacity: 0 }}>
          <Image
            style={{ width: 130, height: 130, marginLeft: 30, marginTop: 20 }}
            source={require('../../assets/ff.png')}
          />
        
          <Image
            style={{ width: 20, height: 10, marginTop: -15, marginLeft: 140 }}
            source={require('../../assets/l.png')}
          />
        </View>
      </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 195,
    backgroundColor: '#20cf85',
    color: 'black',
    paddingBottom: 20,
  },
  containerBox: {
    flex: 1,
    flexDirection: 'row',
    color: 'black',
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 60,
  },
  search: {
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop: -30,
    height: 40,
    color: 'black',
  },
  header: {
    fontSize: 22,
    marginTop: 20,
    marginLeft: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  items: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderColor: '#edeced',
    width: 320,
    height: 50,
    borderRadius: 25,
    marginLeft: 20,
    backgroundColor: '#f5f6f6',
    paddingLeft: 20,
    fontSize: 16,
    color: '#bdbdbd',
  },
});

export default Home;