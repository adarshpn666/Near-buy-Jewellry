import React from "react";
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback } from "react-native";


import Color from "../../Constants/Color";
import RecentPurchaseItem from "./RecentPurchaseItem";
import FontSize from "../../Constants/FontSize";



const CartView = (props) => {
  const moveRecentScreen = () => {
    props.navigation.navigate('RecentPurchaseScreen');
  }



  return (
    <View style={{ ...styles.container, ...props.style }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.content}>
          <Text style={{ color: Color.recentHome, fontSize: FontSize.homeSubHeader }}>
            RECENT PURCHASE
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={moveRecentScreen}>
        <View style={styles.button} >
          <Text style={styles.title}>ALL</Text>
        </View>
        </TouchableWithoutFeedback>
      </View>
      <View>
        {props.data.slice(0,2).map((item) => <RecentPurchaseItem key = {item.id} item = {item}/>)}
      </View>
    </View>
  );
};

export default CartView;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  button: {
    width: 75,
    height: 40,
    backgroundColor: "black",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
  },
  content: {
    height: 40,
    justifyContent : 'center',
  },
});
