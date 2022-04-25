import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import FontSize from "../Constants/FontSize";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="arrow-back-sharp" size={50} color="black" />
      <Text style={styles.text}>{props.title}</Text>
      <Image source={require("../assets/Images/Frame.png")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 60,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.navheaderSize,
  },
});
