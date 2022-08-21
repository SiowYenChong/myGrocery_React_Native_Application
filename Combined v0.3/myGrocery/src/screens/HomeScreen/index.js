/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Dimensions, Pressable, ScrollView, TextInput } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button, Searchbar, ToggleButton } from 'react-native-paper';
import ModalDropdown from 'native-drop-down';
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-vector-icons/Icon';
import { Dropdown } from 'react-native-element-dropdown';

const Home = ({ navigation }) => {
  const [value, setValue] = React.useState('left');
  const [first, setFirst] = React.useState('');
  const [second, setSecond] = React.useState('');
  const [third, setThird] = React.useState('');
  const [fourth, setFourth] = React.useState('');
  const [fifth, setFifth] = React.useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 30,
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={require('../../assets/h.jpeg')}
              style={{ width: 30, height: 25, marginTop: 45, marginLeft: 40 }}
            />
          </TouchableOpacity>
          <Text style={styles.title}>myGrocery</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="black"
          textAlign="left"
        />
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
     
        <View>
       
          <Image
            style={{ width: 130, height: 130, marginLeft: 30, marginTop: 20 }}
            source={require('../../assets/item_one.png')}
          />
          <Dropdown
            style={{
              borderColor: '#6A95D2',
              borderRadius: 100,
              borderWidth: 1.2,
              width: 150,
              height: 70,
              paddingHorizontal: 20,
              backgroundColor: 'white',
              marginTop: 10,
              marginLeft: 20,
            }}
            data={['Breads', 'Cakes', 'Pastries', 'Desserts'].map(item => {
              return { label: item, value: item };
            })}
            maxHeight={400}
            labelField="label"
            valueField="value"
            placeholder={'Bakery'}
            searchPlaceholder="Search..."
            value={first}
            onChange={item => {
              setFirst(item.value);
            }}
          />
        </View>
        <TouchableOpacity  onPress={() => navigation.navigate('Product_category')}>
        <View>
          <Image
            style={{ width: 130, height: 130, marginLeft: 60, marginTop: 20 }}
            source={require('../../assets/item_two.png')}
          />
          <Dropdown
            style={{
              borderColor: '#6A95D2',
              borderRadius: 100,
              borderWidth: 1.2,
              width: 150,
              height: 70,
              paddingHorizontal: 20,
              backgroundColor: 'white',
              marginTop: 10,
              marginLeft: 50,
            }}
            data={['Desserts', 'Ice Cream', 'Meats', 'Pizza'].map(item => {
              return { label: item, value: item };
            })}
            maxHeight={400}
            labelField="label"
            valueField="value"
            placeholder={'Chilled'}
            searchPlaceholder="Search..."
            value={second}
            onChange={item => {
              setSecond(item.value);
            }}
          />
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.items}>
        <View>
          <Image
            style={{ width: 130, height: 130, marginLeft: 30, marginTop: 20 }}
            source={require('../../assets/e.jpeg')}
          />
          <Dropdown
            style={{
              borderColor: '#6A95D2',
              borderRadius: 100,
              borderWidth: 1.2,
              width: 150,
              height: 70,
              paddingHorizontal: 20,
              backgroundColor: 'white',
              marginTop: 10,
              marginHorizontal: 20,
            }}
            data={['Fresh Fruits', 'Fresh Vegetables', 'Meat', 'Seafood'].map(
              item => {
                return { label: item, value: item };
              },
            )}
            maxHeight={400}
            labelField="label"
            valueField="value"
            placeholder={'Fresh'}
            searchPlaceholder="Search..."
            value={third}
            onChange={item => {
              setThird(item.value);
            }}
          />

        </View>
        <View>
          <Image
            style={{ width: 150, height: 130, marginLeft: 20, marginTop: 20 }}
            source={require('../../assets/s.jpeg')}
          />
          <Dropdown
            style={{
              borderColor: '#6A95D2',
              borderRadius: 100,
              borderWidth: 1.2,
              width: 150,
              height: 70,
              paddingHorizontal: 20,
              backgroundColor: 'white',
              marginTop: 10,
              marginHorizontal: 20,
            }}
            data={[
              'Cleaning Supplies',
              'Storage & Organisation',
              'Beauty and personal care',
            ].map(item => {
              return { label: item, value: item };
            })}
            maxHeight={400}
            labelField="label"
            valueField="value"
            placeholder={'HouseHold'}
            searchPlaceholder="Search..."
            value={fourth}
            onChange={item => {
              setFourth(item.value);
            }}
          />

        </View>

      </View>

      <View>
        <Image
          style={{ width: 130, height: 130, marginLeft: 30, marginTop: 20 }}
          source={require('../../assets/ff.png')}
        />

        <View>
          <Dropdown
            style={{
              borderColor: '#6A95D2',
              borderRadius: 100,
              borderWidth: 1.2,
              width: 200,
              height: 70,
              paddingHorizontal: 20,
              backgroundColor: 'white',
              marginTop: 10,
              marginLeft: 10
            }}
            data={[
              'Bottled Beverages, Water, Drink Mixes',
              'Coffee',
              'Hot Chocolate & Malted Drinks',
              'Canned, Jarred & Instant Foods',
              'Snacks & Sweets',
            ].map(item => {
              return { label: item, value: item };
            })}
            maxHeight={400}
            labelField="label"
            valueField="value"
            placeholder={'Food & Beverages'}
            searchPlaceholder="Search..."
            value={fifth}
            onChange={item => {
              setFifth(item.value);
            }}
          />
        </View>
        <View style={{ opacity: 0 }}>
          <Image
            style={{ width: 130, height: 130, marginLeft: 30, marginTop: 20 }}
            source={require('../../assets/ff.png')}
          />
          <ModalDropdown
            style={{ width: 130, marginLeft: 30, marginTop: 20 }}
            textStyle={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#3498DB',
            }}
            dropdownStyle={{ width: 130, height: 130 }}
            dropdownTextStyle={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            }}
            defaultValue={'Food & Beverages'}
            showsVerticalScrollIndicator={true}
            options={[
              'Bottled Beverages, Water, Drink Mixes',
              'Coffee',
              'Hot Chocolate & Malted Drinks',
              'Canned, Jarred & Instant Foods',
              'Snacks & Sweets',
            ]}
          />
          <Image
            style={{ width: 20, height: 10, marginTop: -15, marginLeft: 140 }}
            source={require('../../assets/l.png')}
          />
        </View>
      </View>
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