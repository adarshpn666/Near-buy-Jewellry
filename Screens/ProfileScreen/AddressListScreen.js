import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import UButton from "../../Components/HomeComponents/UButton";
import AddressViewContainer from "../../Components/ProfileComponents/AddressViewContainer";
import Color from "../../Constants/Color";
import AddAddressScreen from "./AddAddressScreen";

import data from "../../data/TempUserData";
const address = data[0].address;

const AddressListScreen = (props) => {

  const addAddressHandler = () => {
    props.navigation.navigate('AddAddressScreen')
  }


  return (

      <View style={styles.container}>
        <AddressViewContainer address = {address} navigation = {props.navigation}/>
        <View style={{flexDirection : 'row'}}>
        <UButton title = "ADD"  style = {{...styles.button, marginRight : 10,}} onPress = {addAddressHandler}/>
        <UButton title="SAVE"   style = {styles.button}/>
        </View>
      </View>
  );
};

export default AddressListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundPrimary,
    padding : 10,
    alignItems: "center",
  },
  button : {
    height : 50,
    width : 150,
    borderRadius  :20,
    backgroundColor : '#3457D5',
  }
});