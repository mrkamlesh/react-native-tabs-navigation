import React, { Component } from 'react';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Home_Activity extends Component {

    static navigationOptions =
        {
            title: 'Profile Activity',
        };

    render() {
        return (
            <View style={styles.MainContainer}>

                <Text style={{ marginTop: 40, fontSize: 20 }}>App Home Screen</Text>

                <Image source={require('./../assets/home_icon.png')} style={{ width: 20, height: 20 }} />
                <Image
                    source={require('./../assets/settings_icon.png')}
                    style={{ width: 20, height: 20 }} />

                {/* <Ionicons name={iconName} size={25} color={tintColor} /> */}

                <Ionicons
                    name="ios-add"
                    color="#ccc"
                    size={25}
                />

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Settings')}>

                        <Text style={styles.text}>Go to settngs Tab</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Details')}>

                        <Text style={styles.text}>Goto Details Screen</Text>

                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        padding: 11

    },

    button: {
        alignItems: 'center',
        backgroundColor: '#43A047',
        padding: 12,
        width: 280,
        marginTop: 12,
    },

    text: {

        color: '#fff'
    }
});