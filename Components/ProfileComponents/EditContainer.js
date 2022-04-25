import React from 'react'
import { StyleSheet, View, Text,TextInput, Dimensions } from 'react-native'

import Color from '../../Constants/Color';
import FontSize from '../../Constants/FontSize';


 const EditContainer  = (props) => {
  return (
   <View>
         <TextInput
          placeholderTextColor='#808e9b'
          style = {{...styles.input}}
          multiline={true}
          numberOfLines={50}
          {...props}
        />
   </View>
  )
 };


export default EditContainer;

const styles = StyleSheet.create({
    input : {
        backgroundColor : Color.primaryText,
        opacity : 0.8,
        height : 60,
        width : 350,
        fontSize : FontSize.navheaderSize,
        paddingLeft : 30,
        borderRadius: 10,
        color : Color.inputColor,
        marginVertical : 20,
    }
})