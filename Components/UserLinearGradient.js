import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const UserLinearGradient = (props) => {
  return (
    <LinearGradient colors={["#80D87E", "#F9FAFE"]} style={styles.container}>
      {props.children}
    </LinearGradient>
  );
};

export default UserLinearGradient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
  },
});
