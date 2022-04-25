import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import FontSize from "../../Constants/FontSize";
import Color from "../../Constants/Color";

const CartItem = (props) => {
  const product = props.data;
  return (
    <View style={styles.container}>
        <Image
          source={product.Image}
          style={{ height: 103, width: 103, borderRadius: 30 }}
        />
        <View>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text style={{ fontSize: 16, width: 250 }}>{product.name}</Text>
            <Ionicons name="close-circle" size={30} />
          </View>

          <Text
            style={{
              color: "rgba(74,74,74,0.55)",
              fontSize: FontSize.homeSubHeader,
            }}
          >
            PRICE
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                color: Color.priceColor,
                fontSize: FontSize.descSize,
                fontWeight: "bold",
              }}
            >
              Rs.{product.price}
            </Text>
            <Text style={styles.smallDetalils}>
              Product Code : {product.productCode}
            </Text>
          </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
    backgroundColor : Color.cartColor,
    borderRadius : 30,
    padding : 10,
  },
  smallDetalils: {
    fontSize: FontSize.storedesc,
    color: Color.textColor,
  },
});
