import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Color from "../../Constants/Color";

import { RadioButton } from "react-native-paper";
import UButton from "../HomeComponents/UButton";

const width = Dimensions.get("window").width;

const AddressItem = (props) => {
 
  return (
    <View >
      <Text style={{ fontSize: 14, color: "#045A6C", maxWidth: width / 1.3 }}>
        {props.address.addressLine.slice(0, 30)}..., {props.address.district},{" "}
        {props.address.state}, {props.address.country}, Pincode :{" "}
        {props.address.pincode}
      </Text>
    </View>
  );
};

const AddressView = (props) => {
  const [checked, setChecked] = React.useState('');

  const addAddressHandler = () => {
    props.navigation.navigate("AddAddressScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>Address</Text>
      {props.address.map((item, key) => (
        <View style={styles.addressContainer}>
          <RadioButton
            value={item.id}
            status={checked === item.id ? "checked" : "unchecked"}
            onPress={() => setChecked(item.id)}
          />
          <AddressItem key={item.id} address={item} />
        </View>
      ))}
      <UButton
        title="Add Address"
        style={{ marginTop: 40, borderRadius: 50 }}
        onPress={addAddressHandler}
      />
    </View>
  );
};

export default AddressView;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: Color.cartColor,
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
  },
  addressContainer: {
    backgroundColor: "rgba(213,213,213,0.36)",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    width: width / 1.1,
    marginVertical: 10,
  },
  textHeading: {
    color: Color.textColor,
    fontSize: 24,
    marginBottom: 10,
    marginRight: width / 1.5,
  },
});
