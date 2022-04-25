import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import StartingPage from "../Screens/StartingScreen/StartingPage";
import Login from "../Screens/StartingScreen/Login";
import Signup from "../Screens/StartingScreen/Signup";
import HomeScreen from "../Screens/UserScreen/HomeScreen";
import CartScreen from "../Screens/UserScreen/CartScreen";
import FavoriteScreen from "../Screens/UserScreen/FavoriteScreen";
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

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: true, headerTitleAlign: "center" }}
      >
        <Stack.Screen
          name="StartingPage"
          component={StartingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("ProfileScreen")}
                title="Info"
                color="#fff"
              />
            ),
          })}
        />
        <Stack.Screen
          name="FavoriteScreen"
          component={FavoriteScreen}
          options={{
            title: "My Favorites",
          }}
        />
        <Stack.Screen
          name="RecentPurchaseScreen"
          component={RecentPurchaseScreen}
        />
        <Stack.Screen name="StoreList" component={StoreList} />
        <Stack.Screen name="StoreScreen" component={StoreScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ProfileEditScreen" component={ProfileEditScreen} />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
        />
        <Stack.Screen name="AddressListScreen" component={AddressListScreen} />
        <Stack.Screen name="AddressEditScreen" component={AddressEditScreen} />
        <Stack.Screen name="AddAddressScreen" component={AddAddressScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen
          name="PaymentSuccessScreen"
          component={PaymentSuccessScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
