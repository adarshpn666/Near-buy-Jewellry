import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import UButton from "../../Components/HomeComponents/UButton";

import Color from "../../Constants/Color";
import FontSize from "../../Constants/FontSize";

const PaymentSuccessScreen = (props) => {
  const continueHandler = () => {
    props.navigation.navigate('Home', { screen: 'Home2' });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Image
            source={require("../../assets/paymentImage/success.png")}
            style={{ width: 70, height: 70 }}
          />
        </View>
        <Text style={styles.text}>Thank You For Purchase</Text>
        <UButton
          title="Continue Purchasing"
          style={styles.button}
          onPress={continueHandler}
        />
      </View>
    </View>
  );
};

export default PaymentSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39AEA9",
    marginTop: 40,
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.descSize,
    color: Color.primaryText,
    marginVertical: 20,
  },

  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 30,
    height: 50,
  },
});
