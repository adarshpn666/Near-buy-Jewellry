import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { RadioButton } from "react-native-paper";

import Color from "../../Constants/Color";
import FontSize from "../../Constants/FontSize";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UButton from "../../Components/HomeComponents/UButton";
import Card from "../../Components/PaymentComponents/Card";

const CustomeText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const PaymentScreen = (props) => {
  const [checked, setChecked] = React.useState("card");

  const paymentHandler = () => {
    props.navigation.navigate({ name: "PaymentSuccessScreen" });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              ...styles.cardContainer,
              borderColor: checked === "card" ? "green" : Color.priceColor,
              backgroundColor:
                checked === "card" ? Color.selectionColor : "#fff",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <RadioButton
                value="card"
                status={checked === "card" ? "checked" : "unchecked"}
                onPress={() => setChecked("card")}
                color="green"
              />
              <CustomeText>Pay through Card</CustomeText>
            </View>

            <Card selected={checked === "card" ? true : false} />
          </View>

          <View
            style={{
              ...styles.delivery,
              borderColor:
                checked === "onDelivery" ? "green" : Color.priceColor,
              backgroundColor:
                checked === "onDelivery" ? Color.selectionColor : "#fff",
            }}
          >
            <RadioButton
              value="onDelivery"
              status={checked === "onDelivery" ? "checked" : "unchecked"}
              onPress={() => setChecked("onDelivery")}
              color="green"
            />
            <CustomeText>Pay On Delivery</CustomeText>
          </View>
          <View style={styles.addressContainer}>
            <Text style={{ textAlign: "center", ...styles.text }}>Address</Text>
            <View style={{ marginTop: 20, flexDirection: "row"}}>
              <Image
                source={require("../../assets/paymentImage/location.png")}
                style={{ width: 30, height: 30, marginRight : 10}}
              />
              <View>
                <Text style={styles.address}>15653 Camino Del Cerro </Text>
                <Text style={styles.address}>Los Gatos, California </Text>
                <Text style={styles.address}>
                  United States, Pincode : 95032{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/paymentImage/payment1.png")}
              style={{ width: 70, height: 70 }}
            />
            <Image
              source={require("../../assets/paymentImage/payment2.png")}
              style={{ width: 70, height: 70 }}
            />
            <Image
              source={require("../../assets/paymentImage/payment3.png")}
              style={{ width: 70, height: 70 }}
            />
          </View>
        </KeyboardAwareScrollView>
        <UButton
          title={"Rs " + props.paymentPrice}
          style={styles.buttonStyle}
          onPress={paymentHandler}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundPrimary,
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.descSize,
    fontWeight: "bold",
    color: Color.SliderColor,
  },
  cardContainer: {
    borderRadius: 10,
    padding: 10,

    borderWidth: 2,
    borderColor: Color.priceColor,
    overflow: "hidden",
  },
  delivery: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Color.priceColor,
    overflow: "hidden",
  },

  addressContainer: {
    borderWidth: 1,
    borderColor: Color.priceColor,
    padding: 10,
    borderRadius: 10,
  },
  address: {
    fontSize: FontSize.descSize,
    color: Color.priceColor,
  },

  buttonStyle: {
    borderRadius: 20,
    height: 50,
    backgroundColor: "rgb(51, 47, 208)",
  },
  imageContainer: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
});
