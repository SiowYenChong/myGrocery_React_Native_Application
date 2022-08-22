import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Divider} from 'react-native-paper';

const Search = ({navigation}) => {
  const [val, setVal] = useState('');
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 60,
        }}>
        <Button
          mode="default"
          textColor="#01bcb5"
          onPress={() => navigation.goBack()}>
          Back
        </Button>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 35,
            marginLeft: 60,
            marginRight: 50,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Search
        </Text>
        <Button mode="default" textColor="#01bcb5" onPress={() => setVal('')}>
          Clear
        </Button>
      </View>
      <TextInput
        value={val}
        onChangeText={setVal}
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="black"
        textAlign="left"
      />
      <View style={styles.scroll}>
        <Text style={styles.card}>Search Results</Text>
        <Divider
          style={{
            height: 2,
            width: 320,
            backgroundColor: '#edeced',
            marginLeft: 20,
            marginTop: 10,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 2,
            width: 320,
            backgroundColor: '#edeced',
            marginLeft: 20,
            marginTop: 10,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 2,
            width: 320,
            backgroundColor: '#edeced',
            marginLeft: 20,
            marginTop: 10,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 2,
            width: 320,
            backgroundColor: '#edeced',
            marginLeft: 20,
            marginTop: 10,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 2,
            width: 320,
            backgroundColor: '#edeced',
            marginLeft: 20,
            marginTop: 10,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 2,
            width: 320,
            backgroundColor: '#edeced',
            marginLeft: 20,
            marginTop: 10,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 2,
            width: 320,
            backgroundColor: '#edeced',
            marginLeft: 20,
            marginTop: 10,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 2,
            width: 320,
            backgroundColor: '#edeced',
            marginLeft: 20,
            marginTop: 10,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 2,
            width: 320,
            backgroundColor: '#edeced',
            marginLeft: 20,
            marginTop: 10,
          }}
        />
        <View>
          <Text style={styles.card}>Search Results</Text>
        </View>
        <Divider
          style={{
            height: 2,
            width: 100,
            backgroundColor: '#edeced',
            marginLeft: 20,
            marginRight: 10,
            marginTop: 10,
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffffe',
    height: '100%',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  card: {
    marginTop: 40,
    fontSize: 15,
    marginLeft: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#edeced',
    width: 320,
    height: 50,
    borderRadius: 25,
    marginLeft: 17,
    marginTop: 40,
    backgroundColor: '#f5f6f6',
    paddingLeft: 20,
    fontSize: 16,
    color: '#bdbdbd',
  },
});

export default Search;
