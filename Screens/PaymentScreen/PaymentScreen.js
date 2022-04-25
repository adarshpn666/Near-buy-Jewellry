import React from "react";
import { StyleSheet, View, Text,TouchableWithoutFeedback,Keyboard } from "react-native";



import Header from "../../Components/Header";
import EditContainer from "../../Components/ProfileComponents/EditContainer";
import Color from "../../Constants/Color";
import FontSize from "../../Constants/FontSize";


import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UButton from "../../Components/HomeComponents/UButton";

const CustomeText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const Card = (props) => {
  return (
    <View>
      <CustomeText>Name : </CustomeText>
      <EditContainer />
      <CustomeText>Card Number : </CustomeText>
      <EditContainer maxLength={16}  keyboardType="number-pad"/>
      <CustomeText>Exp Date : </CustomeText>
      <EditContainer  maxLength={5}/>
      <CustomeText>CVV : </CustomeText>
      <EditContainer  keyboardType="number-pad" maxLength={3} />
    </View>
  );
};

const PaymentScreen = (props) => {
  return (
   
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator = {false}>
        <Card />
        <UButton title = "PAY"/>
        </KeyboardAwareScrollView>
      </View>
    
      </TouchableWithoutFeedback>
    
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundPrimary,
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.descSize,
  },
});
