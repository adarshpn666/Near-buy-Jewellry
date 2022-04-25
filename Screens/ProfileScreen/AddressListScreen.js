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

import data from "../../database/TempUserData";
const address = data[0].address;

const AddressListScreen = (props) => {


  return (

      <View style={styles.container}>
        <AddressViewContainer address = {address} navigation = {props.navigation}/>
        <View style={{flexDirection : 'row'}}>
        <UButton title = "ADD"  style = {{width : 100}}/>
        <UButton title="SAVE"   style = {{width : 100}}/>
        </View>
        
      </View>
  );
};

export default AddressListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundPrimary,
    alignItems: "center",
  },
});