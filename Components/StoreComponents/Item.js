import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import Color from "../../Constants/Color";
import { toggleFavorite } from "../../store/actions/favorites";


const { width, height } = Dimensions.get("window");

const Item = (props) => {
  const product = props.item;

  const dispatch = useDispatch();

  const ProductId = product.id;
  const currentMealFavorite = useSelector(state => state.favorite.favoritesProducts.some(item => item.id === ProductId))

  const toggleFavoriteHandler = useCallback(() =>{
    dispatch(toggleFavorite(ProductId));
  },[dispatch,ProductId]);

  // useEffect(() => {
  //   props.navigation.setParams({toggleFav : toggleFavoriteHandler});
  // },[toggleFavoriteHandler])
 

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
          color={currentMealFavorite?"red" : "white"}
          onPress={toggleFavoriteHandler}
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
