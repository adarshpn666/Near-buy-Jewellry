import React from "react";
import { StyleSheet, View, Text,Dimensions } from "react-native";
import Color from "../../Constants/Color";

import { Ionicons } from "@expo/vector-icons";
import UButton from "../HomeComponents/UButton";

const width = Dimensions.get('window').width;


const AddressItem = (props) => {
  return (
    <View style={styles.addressContainer}>
        <Ionicons name = 'radio-button-on' size = {30} style = {{marginRight : 10,}} />
      <Text style = {{fontSize : 14, color : '#045A6C', maxWidth : width/1.3}}>
        {props.address.addressLine.slice(0,30)}..., {props.address.district},{" "}
        {props.address.state}, {props.address.country}, 
        Pincode : {props.address.pincode}
      </Text>
    </View>
  );
};

const AddressView = (props) => {

  const addAddressHandler = () => {
    props.navigation.navigate('AddAddressScreen');
  }




  return (
    <View style = {styles.container}>
        <Text style = {styles.textHeading}>Address</Text>
      {props.address.map((item,key) => (
        <AddressItem key = {item.id} address={item} />
      ))}
      <UButton title = "Add Address" style = {{marginTop : 40, borderRadius : 50}} onPress = {addAddressHandler}/>
    </View>
  );
};

export default AddressView;

const styles = StyleSheet.create({
    container : {
        marginTop : 40,
        backgroundColor  : Color.cartColor,
        alignItems : 'center',
        padding : 10,
        borderRadius : 30,
    },
    addressContainer : {
        backgroundColor  : 'rgba(213,213,213,0.36)',
        padding : 10,
        borderRadius : 10,
        flexDirection : 'row',
        width : width/1.1,
        marginVertical  : 10,

    },
    textHeading :{
        color : Color.textColor,
        fontSize : 24,
        marginBottom : 10,
        marginRight : width/1.5,
    }
});
