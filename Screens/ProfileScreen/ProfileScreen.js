import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";

import Color from "../../Constants/Color";
import Navigation from "../../navigation/Navigation";

const Item = (props) => {
  return (
    <TouchableHighlight
      onPress={() => props.navigation.navigate(props.name + "")}
    >
      <View style={{ ...styles.options, ...props.style }}>
        <Text style={{ ...styles.text, ...props.textStyle }}>
          {props.children}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const width = Dimensions.get("window").width;
const ProfileScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../../assets/Images/Frame.png")}
            style={{ width: 150, height: 150, marginVertical: 20 }}
          />
        </View>
        <Item navigation={props.navigation} name="RecentPurchaseScreen">
          Purchase History
        </Item>
        <Item navigation={props.navigation} name="CartScreen">
          Cart
        </Item>
        <Item navigation={props.navigation} name="FavoriteScreen">
          Favorite Products
        </Item>
        <Item navigation={props.navigation} name="ProfileEditScreen">
          Edit Profile
        </Item>
        <Item navigation={props.navigation} name="AddressListScreen">
          Edit Address
        </Item>
        <Item navigation={props.navigation} name="ChangePasswordScreen">
          Change Password
        </Item>
        <Item
          style={{ backgroundColor: "#FF0000" }}
          textStyle={{ color: Color.primaryText }}
          navigation={props.navigation}
          name="RecentPurchaseScreen"
        >
          Log Out
        </Item>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundPrimary,
    alignItems: "center",
    justifyContent: "space-around",
  },
  options: {
    width: width / 1.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.primaryText,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
  },
});
