import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Header from '../../Components/Header';
import UButton from '../../Components/HomeComponents/UButton';

import Color from '../../Constants/Color';
import FontSize from '../../Constants/FontSize';


 const PaymentSuccessScreen  = () => {
  return (
   <View style = {styles.container}>
    <Header/>
    <View style = {{flex:1,justifyContent :'center',alignItems : 'center'}}>
        <Text style = {styles.text}>Thank You For Purchase</Text>
        <UButton title = "Continue Purchasing"/>
    </View>
   </View>
  )
 };


export default PaymentSuccessScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backgroundPrimary,
        marginTop: 40,
        alignItems: "center",
      },
      text: {
        fontSize: FontSize.descSize,
      },
})