import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Header from "../../Components/Header";

import data from "../../data/TempShopData";

import { Ionicons } from "@expo/vector-icons";
import UButton from "../../Components/HomeComponents/UButton";
import Color from "../../Constants/Color";
import FontSize from "../../Constants/FontSize";

const width = Dimensions.get("window").width;


const ProductScreen = (props) => {
  const item = props.route.params.product;
  const [numberOfItem, setNumberOfItem] = useState(1);
  const [price, setPrice] = useState(item.price);

  const increaseNumberOfItemHandler = () => {
    numberOfItem === 10
      ? setNumberOfItem(numberOfItem)
      : setNumberOfItem(numberOfItem + 1);
  };

  const decreaseNumberOfItemHandler = () => {
    numberOfItem === 1 ? setNumberOfItem(1) : setNumberOfItem(numberOfItem - 1);
  };

  useEffect(() => {
    setPrice(numberOfItem*item.price);
  },[numberOfItem]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri:item.image}} style={styles.image} />
        <View
          style={{ ...styles.infoContainer, ...styles.commonContainerStyle }}
        >
          <Text style={{ ...styles.headtext }}>{item.name}</Text>
          <Text style={{ ...styles.descriptext }}>
            Product Code : {item.productCode}
          </Text>
          <Text style={{ ...styles.descriptext }}>
            Availability : {item.availability ? "In Stock" : "Out Of Stock"}
          </Text>
          <Text style={{ ...styles.headtext }}>Price : {price}</Text>
        </View>
        <View
          style={{ ...styles.addCartContainer, ...styles.commonContainerStyle }}
        >
          <View>
            <Text style={{ ...styles.headtext }}>Price: </Text>
            <Text style={{ ...styles.headtext, fontSize: 24 }}>{price}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 100,
              alignItems: "center",
            }}
          >
            <Ionicons
              name="remove-circle-outline"
              size={30}
              onPress={decreaseNumberOfItemHandler}
              color="#959595"
            />
            <Text style={{ ...styles.addText, ...styles.headtext }}>
              {numberOfItem}
            </Text>
            <Ionicons
              name="add-circle-outline"
              size={30}
              onPress={increaseNumberOfItemHandler}
            />
          </View>
          <UButton title="Add Cart" style = {{width : 120}} />
        </View>
        <View
          style={{
            ...styles.commonContainerStyle,
            ...styles.descriptionContainer,
          }}
        >
          <Text
            style={{
              ...styles.headtext,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            More Details
          </Text>
          <Text style={{ ...styles.headtext }}>
            Gold Purity : {item.goldPurity}
          </Text>
          <Text style={{ ...styles.headtext }}>
            Gross weight : {item.grossWeight}
          </Text>
          <Text style={{ ...styles.headtext }}>
            Net weight : {item.netWeight}
          </Text>
          <Text style={{ ...styles.headtext }}>
            Certification Details :
            {item.certificationDetails}
          </Text>
          <Text style={{ ...styles.headtext }}>Gender : {item.gender}</Text>
          <Text style={{ ...styles.headtext }}>Category : {item.category}</Text>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={{ ...styles.headtext }}>Description</Text>
            <Text style={{ ...styles.descriptext, width: width / 1.2 }}>
              {item.description}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.backgroundPrimary,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 30,
    marginVertical: 20,
  },
  infoContainer: {
    marginVertical: 30,
    borderRadius: 30,
    padding: 20,
  },
  commonContainerStyle: {
    backgroundColor: Color.primaryText,
    width: width / 1.1,
    borderRadius: 20,
  },
  addCartContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addText: {
    textAlign: "center",
    width: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#959595",
  },
  headtext: {
    color: Color.productheader,
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptext: {
    color: Color.productdescription,
    fontSize: FontSize.homeSubHeader,
    fontSize: 16,
  },

  descriptionContainer: {
    padding: 20,
    marginVertical: 20,
  },
});
