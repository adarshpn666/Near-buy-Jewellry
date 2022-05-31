import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "../Screens/StartingScreen/Login";
import Signup from "../Screens/StartingScreen/Signup";
import CartScreen from "../Screens/UserScreen/CartScreen";
import RecentPurchaseScreen from "../Screens/UserScreen/RecentPurchaseScreen";
import StoreList from "../Screens/StoreScreen/StoreList";
import StoreScreen from "../Screens/StoreScreen/StoreScreen";
import ProductScreen from "../Screens/StoreScreen/ProductScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import ProfileEditScreen from "../Screens/ProfileScreen/ProfileEditScreen";
import ChangePasswordScreen from "../Screens/ProfileScreen/ChangePasswordScreen";
import AddressListScreen from "../Screens/ProfileScreen/AddressListScreen";
import PaymentScreen from "../Screens/PaymentScreen/PaymentScreen";
import PaymentSuccessScreen from "../Screens/PaymentScreen/PaymentSuccessScreen";
import AddressEditScreen from "../Screens/ProfileScreen/AddressEditScreen";
import AddAddressScreen from "../Screens/ProfileScreen/AddAddressScreen";
import DrawerNavigation from "./DrawerNavigation";
import CustomizationScreen from "../Screens/CustomizationScreen/CustomizationScreen";
import CustomizationSuccessScreen from "../Screens/CustomizationScreen/CustomizationSuccessScreen";
import FavoriteScreen from "../Screens/UserScreen/FavoriteScreen";
import LoadingScreen from "../Screens/UserScreen/LoadingScreen";

const AuthNavigatorStack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <AuthNavigatorStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShown: false,
      }}
    >
      <AuthNavigatorStack.Screen name="Login" component={Login} />
      <AuthNavigatorStack.Screen name="Signup" component={Signup} />
      <AuthNavigatorStack.Screen
        name="Loading Screen"
        component={LoadingScreen}
      />
    </AuthNavigatorStack.Navigator>
  );
};

const HomeNavigatorStack = createNativeStackNavigator();

export const HomeNavigation = () => {
  return (
  <HomeNavigatorStack.Navigator>
    <HomeNavigatorStack.Screen
      name="HomeScreen"
      component={DrawerNavigation}
      options={{
        headerShown: false,
      }}
    />
    <HomeNavigatorStack.Screen
      name="CartScreen"
      component={CartScreen}
      options={{ title: "Cart" }}
    />
    <HomeNavigatorStack.Screen
      name="FavoriteScreen"
      component={FavoriteScreen}
      options={{ title: "Favorite" }}
    />

    <HomeNavigatorStack.Screen
      name="RecentPurchaseScreen"
      component={RecentPurchaseScreen}
      options={{ title: "Recent Purchase" }}
    />
    <HomeNavigatorStack.Screen
      name="ProductScreen"
      component={ProductScreen}
      options={{ title: "Product Details" }}
    />

    <HomeNavigatorStack.Screen
      name="StoreList"
      component={StoreList}
      options={{ title: "Shops" }}
    />
    <HomeNavigatorStack.Screen
      name="StoreScreen"
      component={StoreScreen}
      options={{ title: "Shops" }}
    />

    <HomeNavigatorStack.Screen
      name="CustomizationScreen"
      component={CustomizationScreen}
      options={{ title: "Customize Jewellery" }}
    />
    <HomeNavigatorStack.Screen
      name="CustomizationSuccessScreen"
      component={CustomizationSuccessScreen}
      options={{ headerShown: false }}
    />

    <HomeNavigatorStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{ title: "Account Settings" }}
    />
    <HomeNavigatorStack.Screen
      name="ProfileEditScreen"
      component={ProfileEditScreen}
      options={{ title: "Profile Edit" }}
    />
    <HomeNavigatorStack.Screen
      name="ChangePasswordScreen"
      component={ChangePasswordScreen}
      options={{ title: "Change password" }}
    />
    <HomeNavigatorStack.Screen
      name="AddressListScreen"
      component={AddressListScreen}
      options={{ title: "Address" }}
    />
    <HomeNavigatorStack.Screen
      name="AddressEditScreen"
      component={AddressEditScreen}
      options={{ title: "Edit Address" }}
    />
    <HomeNavigatorStack.Screen
      name="AddAddressScreen"
      component={AddAddressScreen}
      options={{ title: "Add Address" }}
    />
    <HomeNavigatorStack.Screen
      name="PaymentScreen"
      component={PaymentScreen}
      options={{ title: "Payment" }}
    />
    <HomeNavigatorStack.Screen
      name="PaymentSuccessScreen"
      component={PaymentSuccessScreen}
      options={{ headerShown: false }}
    />
  </HomeNavigatorStack.Navigator>
   );
};
