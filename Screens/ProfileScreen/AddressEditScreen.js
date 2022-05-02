import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UButton from "../../Components/HomeComponents/UButton";
import EditContainer from "../../Components/ProfileComponents/EditContainer";
import Color from "../../Constants/Color";
import FontSize from "../../Constants/FontSize";

const CustomeText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const AddressEditScreen = (props) => {
  const address = props.route?.params?.address;

  const [addressLine, setAddressLine] = useState(address?address.addressLine : '');
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");



  const AddressContainer = () => {
    return (
      <View style={{ marginTop: 10 }}>
        <CustomeText>Address line 1 : </CustomeText>
        <EditContainer/>
        <CustomeText>District : </CustomeText>
        <EditContainer />
        <CustomeText>State : </CustomeText>
        <EditContainer />
        <CustomeText>Country : </CustomeText>
        <EditContainer />
        <CustomeText>Pincode : </CustomeText>
        <EditContainer />
      </View>
    );
  };

  const saveAddressDataHandler = () => {
    console.log(address);
  };

  return (
    <KeyboardAwareScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <AddressContainer data={address} />
          <UButton
            title={props.route.params.buttonTitle}
            style={styles.button}
            onPress={saveAddressDataHandler}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default AddressEditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundPrimary,
    alignItems: "center",
  },
  button: {
    height: 50,
    width: 150,
    borderRadius: 20,
    backgroundColor: "#3457D5",
  },
  text: {
    fontSize: FontSize.descSize,
  },
});
