import React from 'react'
import { StyleSheet, View, Text,TextInput } from 'react-native'

import Color from '../Constants/Color';
import FontSize from '../Constants/FontSize';

 const Input  = (props) => {
  return (
      <TextInput {...props}  style = {{...styles.input, ...props.style}} underlineColorAndroid="transparent"/>
  )
 };


export default Input;

const styles = StyleSheet.create({
    input : {
        backgroundColor : Color.primaryText,
        opacity : 0.8,
        height : 60,
        width : 350,
        fontSize : FontSize.navheaderSize,
        paddingLeft : 30,
        borderRadius: 50,
        color : Color.inputColor,

    }
})