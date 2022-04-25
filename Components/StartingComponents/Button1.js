import React from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";

import Font from "../../Constants/Font";
import Fontsize from "../../Constants/FontSize";
import Color from "../../Constants/Color";

const Button1 = (props) => {
  return (
      <TouchableOpacity style = {{...styles.button,...props.styleButton}} {...props} >
        <Text style={{...styles.title,...props.titleStyle}}>{props.title}</Text>
      </TouchableOpacity>
  );
};

export default Button1;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primaryText,
    width: 150,
    height: 50,
    marginTop: 20,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7,
    borderRadius: 30,
  },
  title: {
    fontSize: Fontsize.descSize,
    fontWeight: "bold",
    color: Color.buttonColor,
    textAlign: "center",
  },
});
