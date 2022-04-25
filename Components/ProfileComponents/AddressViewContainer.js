import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import UButton from '../HomeComponents/UButton';
import { Ionicons } from "@expo/vector-icons";

const width = Dimensions.get('window').width;


const AddressItem = (props) => {
  const editAddressHandler = () => {
    props.navigation.navigate('AddressEditScreen');
  }



    return (
      <View style={styles.addressContainer}>
        <Text style = {{fontSize : 14, color : '#045A6C', maxWidth : width/1.3, marginVertical : 20}}>
          {props.address.addressLine.slice(0,30)}..., {props.address.district},{" "}
          {props.address.state}, {props.address.country}, 
          Pincode : {props.address.pincode}
        </Text>
        <UButton title = 'edit' onPress = {editAddressHandler}/>
      </View>
    );
  };

 const AddressViewContainer  = (props) => {
  return (
   <View>
    {props.address.map((item,key) => (
        <AddressItem key = {item.id} address={item}  navigation = {props.navigation}/>
      ))}
   </View>
  )
 };


export default AddressViewContainer;

const styles = StyleSheet.create({
    addressContainer : {
        backgroundColor  : 'rgba(213,213,213,0.36)',
        padding : 10,
        borderRadius : 10,
        width : width/1.1,
        marginVertical : 20,
    },
});