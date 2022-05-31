import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Color from "../../Constants/Color";
import FontSize from "../../Constants/FontSize";
import UButton from "../HomeComponents/UButton";

const width = Dimensions.get("window").width;

const Store = (props) => {
  const store = props.data;

  const navigateStoreScreenHandler = () => {
    props.navigation.navigate("StoreScreen", {
      shopData: store,
    });
  };

  return (
    <TouchableWithoutFeedback>
      <ImageBackground
        source={{uri:store.image}}
        resizeMode="cover"
        style={styles.container}
        imageStyle={{ borderRadius: 20 }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: Color.ItemColor,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10,
            }}
          >
            <Text style={styles.text}>{store.name}</Text>
            <View>
              <Image source={require("../../assets/Images/mapIcon.png")} />
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 30,
            }}
          >
            <UButton
              title="Shop"
              style={{
                width: width / 3,
                backgroundColor: Color.GoldContainerColor,
              }}
              onPress={navigateStoreScreenHandler}
            />
            <Text
              style={{
                fontSize: FontSize.navheaderSize,
                color: Color.primaryText,
                marginRight: 10,
              }}
            >
              {store.rating} <Ionicons name="star" size={30} color="white" />
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: width / 1.05,
    height: 200,
  },
  text: {
    width: 300,
    color: Color.primaryText,
    fontSize: FontSize.storeTitle,
  },
});
