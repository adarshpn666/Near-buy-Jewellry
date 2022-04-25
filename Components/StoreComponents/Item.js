import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Color from "../../Constants/Color";

const { width, height } = Dimensions.get("window");

const Item = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const product = props.item;

  // useEffect(() => {}, [isFavorite]);

  const  navigateProductScreen = () =>{
    props.navigation.navigate('ProductScreen');
  }

  return (
    <TouchableWithoutFeedback onPress={navigateProductScreen}>
    <View style={{ ...styles.container, ...props.style }}>
    
      <View>
      <ImageBackground
        source={product.Image}
        imageStyle={{ borderRadius: 100 }}
        style={{
          marginTop: 5,
          width: 130,
          height: 130,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: Color.ItemColor,
            borderRadius: 100,
          }}
        ></View>
      </ImageBackground>
      </View>
      
      <Text style = {{
        fontSize : 12,
        fontWeight : 'bold',
        marginTop : 10,
      }}>{product.name}</Text>
      <Text style = {{
        fontSize : 10,
        color : Color.priceColor,
        marginTop : 5,
      }}>
        Availability:
        {product.avalibity ? "Order Now" : "Out Of Stock"}
      </Text>
      <View style = {styles.price}>
      <Text style = {{
        fontSize : 18,
        fontWeight : 'bold',
        color : Color.priceColor,
        marginRight : 30,
      }}>Rs. {product.price}</Text>
      <View
        style={{
          backgroundColor: "black",
          width: 30,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
        }}
      >
        <Ionicons
          name="heart-sharp"
          size={20}
          color="white"
          onPress={() => {
          }}
        />
      </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primaryText,
    width: width / 2.5,
    height: 250,
    margin: 10,
    borderRadius: 30,
    alignItems: "center",
    marginBottom : 20,
  },
  price : {
    flexDirection: "row",
    marginTop : 20,
  }
});
