import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Color from "../../Constants/Color";
import FontSize from "../../Constants/FontSize";

const GoldRate = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <View>
        <View
          style={{
            backgroundColor: "rgba(147,124,6,0.8)",
            width: 140,
            height: 20,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...styles.text,
            }}
          >
            GOLD RATE
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(10,124,55,0.5)",
            width: 140,
            height: 20,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ ...styles.text }}>PRICE</Text>
        </View>
        <View style={{alignItems: "center",}}>
          <Text style={styles.text}>price per gram</Text>
        </View>
      </View>
      <View style={{
          backgroundColor: "#ffffff",
          borderRadius: 10,
          width : 170,
          height  :70,
          justifyContent :'center',
          alignItems : 'center',
      }}>
        <Text
          style={{
            color: "black",
            fontSize: FontSize.storeTitle,
            fontWeight: "bold",
          }}
        >
          $ 62.16
        </Text>
      </View>
    </View>
  );
};

export default GoldRate;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 15,
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: Color.GoldContainerColor,
    justifyContent: "space-around",
  },
  text: {
    color: "#ffffff",
  },
});
