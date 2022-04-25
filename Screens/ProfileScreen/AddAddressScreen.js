import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UButton from "../../Components/HomeComponents/UButton";
import AddressContainer from "../../Components/ProfileComponents/AddressContainer";
import Color from "../../Constants/Color";

const AddAddressScreen = (props) => {


  return (
    <KeyboardAwareScrollView>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>

        <AddressContainer/>
        <UButton title="ADD" />
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundPrimary,
    alignItems: "center",
  },
});
