import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Drawer,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../store/actions/auth";


import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import{ AuthContext } from '../components/context';

export function DrawerContent(props) {
  const paperTheme = useTheme();

  const dispatch = useDispatch();

  const signOutHandler = useCallback(() => {
    dispatch(signOutUser());
  }, [dispatch]);

  // const { signOut, toggleTheme } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Alex</Title>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home", { screen: "Home2" });
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="cart-plus" color={color} size={size} />
              )}
              label="Recent Purchase"
              onPress={() => {
                props.navigation.navigate("RecentPurchaseScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="cart" color={color} size={size} />
              )}
              label="Cart"
              onPress={() => {
                props.navigation.navigate("CartScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-settings" color={color} size={size} />
              )}
              label="Account Settings"
              onPress={() => {
                props.navigation.navigate("ProfileScreen");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={signOutHandler}
        />
      </Drawer.Section>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
