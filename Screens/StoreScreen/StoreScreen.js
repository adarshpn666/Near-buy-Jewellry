import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import UButton from "../../Components/HomeComponents/UButton";
import FontSize from "../../Constants/FontSize";
import Color from "../../Constants/Color";

import Item from "../../Components/StoreComponents/Item";
import { useDispatch, useSelector } from "react-redux";
import { loadingProducts } from "../../store/actions/shopProduct";

const width = Dimensions.get("window").width;

const renderHeader = (props) => {
  const store = props.route.params.shopData;

  const customizationHandler = () => {
    props.navigation.navigate("CustomizationScreen");
  };

  return (
    <View>
      <ImageBackground
        source={{ uri: store.image }}
        resizeMode="cover"
        style={styles.imageContainer}
        imageStyle={{}}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Text style={styles.text}>{store.name}</Text>
          <Image
            source={require("../../assets/Images/mapIcon.png")}
            style={{ marginRight: 10 }}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 30,
          }}
        >
          <View>
            <Text
              style={{
                color: Color.primaryText,
                fontSize: FontSize.descSize,
                width: 250,
                marginLeft: 10,
              }}
            >
              For Customize Jewellery Please contact us.
            </Text>
            <UButton
              title="Customization"
              style={{ backgroundColor: Color.GoldContainerColor }}
              onPress={customizationHandler}
            />
          </View>
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
      </ImageBackground>
    </View>
  );
};

const StoreScreen = (props) => {
  const store = props.route.params.shopData;

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(loadingProducts(store.id));
    setIsLoading(false);
  }, [dispatch]);

  const products = useSelector((state) => state.shopProduct.products);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <Item item={item} key={item.id} navigation={props.navigation} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => renderHeader(props)}
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.listView}
      />
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.backgroundPrimary,
  },
  imageContainer: {
    width: width,
  },
  text: {
    color: Color.primaryText,
    fontSize: FontSize.storeTitle,
    width: width / 1.5,
    textAlign: "center",
    marginTop: 30,
  },
});
