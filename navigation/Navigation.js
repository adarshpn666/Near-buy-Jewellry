import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import StartingPage from "../Screens/StartingScreen/StartingPage";
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

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
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
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="CartScreen" component={CartScreen}  options={{ title: 'Cart' }} />
        <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ title: 'Favorite' }}/>

        <Stack.Screen name="RecentPurchaseScreen" component={RecentPurchaseScreen} options={{ title: 'Recent Purchase' }}/>
        <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ title: 'Product Details' }}/>
        
        <Stack.Screen name="StoreList" component={StoreList} options={{ title: 'Shops' }}/>
        <Stack.Screen name="StoreScreen" component={StoreScreen} options={{ title: 'Shops' }}/>
        
        <Stack.Screen name="CustomizationScreen" component={CustomizationScreen} options={{ title: 'Customize Jewellery' }}/>
        <Stack.Screen name="CustomizationSuccessScreen" component={CustomizationSuccessScreen} options={{ headerShown: false }}/>
        

        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Account Settings' }} />
        <Stack.Screen name="ProfileEditScreen" component={ProfileEditScreen} options={{ title: 'Profile Edit' }} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{ title: 'Change password' }}/>
        <Stack.Screen name="AddressListScreen" component={AddressListScreen} options={{ title: 'Address' }}/>
        <Stack.Screen name="AddressEditScreen" component={AddressEditScreen} options={{ title: 'Edit Address' }}/>
        <Stack.Screen name="AddAddressScreen" component={AddAddressScreen} options={{ title: 'Add Address' }}/>
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ title: 'Payment' }} />
        <Stack.Screen
          name="PaymentSuccessScreen"
          component={PaymentSuccessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
