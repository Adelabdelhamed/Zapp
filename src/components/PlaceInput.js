import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import DefaultInput from '../components/UI/DefaultInput';

const PlaceInput = props => (

    <DefaultInput 
    placeholder="Place Name" 
    value={props.placeName} 
    onChangeText={props.onChangeText}/>
);


export default PlaceInput;
