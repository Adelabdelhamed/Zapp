import React, { Component } from 'react';
import { View, Image, Button, StyleSheet, Text, Dimensions } from 'react-native';

class PickLocation extends Component {

    state = {
        focusedLocation: {
            latitude: 37.7900352,
            longitude: -122.4013726,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122
        }
    }

    render() {
        return (
            <View style={styles.container}>


                <View style={styles.button}>
                <Button title="Locate Me" onPress={() => alert('Locate Me!')}/>
                </View>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    map: {
        width: "100%",
        height: 250
    },
    button: {
        margin: 8
    }
})

export default PickLocation;