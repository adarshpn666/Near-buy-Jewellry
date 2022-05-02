import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

import data from "../../database/TempUserData";
import CartItem from "../../Components/CartComponents/CartItem";
import AddressView from "../../Components/CartComponents/AddressView";
import PurityOption from "../../Components/CartComponents/PurityOption";
import TotalPrice from "../../Components/CartComponents/TotalPrice";
import Color from "../../Constants/Color";


const CartScreen = (props) => {
  const cartDetails = data[0].cart;
  const address = data[0].address;
  const renderData = (item) => {
    return <CartItem key = {item.id} data={item} />;
  };
  return (
    <View style={styles.container}>
      <ScrollView  showsVerticalScrollIndicator = {false}>
        <View>{cartDetails.map((item,key) => renderData(item))}</View>
        <AddressView address = {address} navigation = {props.navigation}/>
        <PurityOption/>
        <TotalPrice cart = {cartDetails} navigation = {props.navigation}/>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor : Color.backgroundPrimary,
    
  },
});
