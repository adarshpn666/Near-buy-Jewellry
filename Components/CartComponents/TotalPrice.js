import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import Color from '../../Constants/Color';
import UButton from '../HomeComponents/UButton';

const width = Dimensions.get('window').width;


 const TotalPrice  = (props) => {
     const data = [];
     props.cart.map(item => data.push(item.price));
     const subtotal = data.reduce((sum, item) => sum + item);
     
     const checkOutHandler = () => {
        props.navigation.navigate('PaymentScreen');
     }
  return (
   <View style={styles.container}>
    <View style = {styles.itemContainer}>
        <Text style = {styles.text}>Subtotal</Text>
        <Text style = {styles.text}>Rs. {subtotal}</Text>
    </View>
    <View  style = {styles.itemContainer}>
        <Text style = {styles.text}>Delivery Charge</Text>
        <Text style = {styles.text}>Rs. {50}</Text>
    </View>
    <View  style = {{...styles.itemContainer, borderBottomWidth : 0}}>
        <Text style = {styles.text}>Total</Text>
        <Text style = {styles.text}>Rs. {subtotal + 50}</Text>
    </View>
    <UButton title = "Proceed To Checkout"  style = {{width : width/1.2, borderRadius : 50 }} onPress = {checkOutHandler}/>
   </View>
  )
 };


export default TotalPrice;

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        marginVertical : 20,
    },
    itemContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderColor : '#8A8A8A',
        borderStyle : 'solid',
        borderBottomWidth : 0.7,
        width : width/1.2,
        padding : 10,
    },
    text : {
        fontSize : 16,
        color : Color.textColor,
    }
})