import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

export default class Welcome extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#24CE85', fontSize: 50, }}>
                <View>
                    <Text style={styles.Welcome} >Welcome to</Text>
                    <Text style={styles.myGrocery} >myGrocery</Text>
                    <Text style={styles.tagline} >your one stop</Text>
                    <View style={{ marginBottom: 150 }}>
                        <Text style={styles.tagline} >shopping app</Text>
                    </View>
                </View>

                <View alignItems='center'>
                    <TouchableHighlight
                        onPress={() => {
                            this.props.navigation.navigate('Login');
                        }}
                        underlayColor="#24CE85"

                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </View>
                    </TouchableHighlight>


                    <TouchableHighlight
                        onPress={() => {
                            this.props.navigation.navigate('SignUp');
                        }}
                        underlayColor="#24CE85"

                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    Welcome: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 200,
    },

    myGrocery: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },

    tagline: {
        color: '#666666',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },

    button: {
        marginBottom: 10,
        width: 350,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
    },

    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: '#24CE85',
        fontWeight: 'bold',
    },

},
);