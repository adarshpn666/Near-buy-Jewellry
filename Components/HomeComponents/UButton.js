import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity,  } from 'react-native'
import Color from '../../Constants/Color';



 const UButton  = (props) => {
  return (
      <TouchableOpacity underlayColor="white" activeOpacity={.9} {...props} style = {{...styles.container,...props.style}}>
          <View >
              <Text style = {styles.text}>{props.title}</Text>
          </View>
      </TouchableOpacity>
  )
 };


export default UButton;

const styles = StyleSheet.create({
    container :{
        backgroundColor : 'black',
        padding : 10,
        width : '90%',
        marginVertical : 10,
        alignItems : 'center',
        borderRadius : 10
    },

    text : {
        color : Color.primaryText,
        fontSize : 20,
    }
})