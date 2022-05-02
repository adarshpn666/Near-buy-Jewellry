import React from 'react'
import { StyleSheet, View, Text, Dimensions, TextInput, } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";


const width = Dimensions.get('window').width;

 const Card  = (props) => {
  return (
   <View style = {styles.container}>
       <LinearGradient colors={["#9B4CDD", "#6325F4"]} style={styles.cardStyle}>
           <TextInput style = {{...styles.input,width : 220,justifyContent : 'flex-start'}}  numberOfLines = {1} placeholder = 'name' editable={props.selected ? true :false}/>
           <TextInput style = {{...styles.input,width : 250}}  maxLength = {16} numberOfLines = {1} keyboardType = 'number-pad'  placeholder = 'card number' editable={props.selected ? true :false}/>
           <View style = {{flexDirection : 'row', justifyContent :'space-between', width: width/1.2}}>
           <TextInput style = {{...styles.input,width : 70, maxWidth : 100}}  maxLength = {5} numberOfLines = {1}  placeholder = 'exp'  editable={props.selected ? true :false}/>
           <TextInput style = {{...styles.input,width : 60}}  maxLength = {3} numberOfLines = {1}  keyboardType = 'number-pad'  placeholder = 'CVV' secureTextEntry={true} editable={props.selected ? true :false}/>
           </View> 
       </LinearGradient>
    
   </View>
  )
 };


export default Card;

const styles = StyleSheet.create({
    cardStyle :{
        width : width/1.1,
        height : 250,
        padding : 20,
        borderRadius : 10,
        borderWidth : 1,
        elevation : 3,
        overflow : 'hidden',
    },

    input :{
        borderWidth : 2, 
        borderTopWidth : 0,
        borderRightWidth : 0,
        borderLeftWidth : 0,
        borderColor : 'rgba(255,255,255,0.5)',
        color : 'white',
        fontSize : 24,
        marginTop :20,
    }
})