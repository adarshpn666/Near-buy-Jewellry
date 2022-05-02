import React from "react";
import { StyleSheet} from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


import FavoriteScreen from "../Screens/UserScreen/FavoriteScreen";
import CartScreen from "../Screens/UserScreen/CartScreen";
import StoreList from "../Screens/StoreScreen/StoreList";
import CustomizedOrderScreen from "../Screens/CustomizationScreen/CustomizedOrderScreen";
import HomeScreen from "../Screens/UserScreen/HomeScreen";

import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createMaterialBottomTabNavigator();



const BottomTabNavigation = ({ navigation, route }) => {

  function getHeaderTitle(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  
    switch (routeName) {
      case 'Home2':
        return 'Home';
      case 'Favorites':
        return 'Favorites';
      case 'Shop':
        return 'Shops';
      case 'Cart':
        return 'Cart';
      case 'Requests':
        return 'Custom Requests';
    }
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);
  


  return (
    <Tab.Navigator>
      <Tab.Screen name="Home2" component={HomeScreen}  options = {{
        title : 'Home',
       tabBarIcon : () => (<Ionicons name = 'home' size = {24} color = 'white'/>),
      }}/>
      <Tab.Screen name="Favorites" component={FavoriteScreen} options = {{
         title : 'Favorites',
       tabBarIcon : () => (<Ionicons name = 'heart' size = {24} color = 'white'/>),
      }}/>
      <Tab.Screen name="Shop" component={StoreList} options = {{

       tabBarIcon : () => (<Ionicons name = 'add-circle-outline' size = {24} color = 'white'/>),
      }}/>
      <Tab.Screen name="Cart" component={CartScreen} options = {{
         title : 'Cart',
       tabBarIcon : () => (<Ionicons name = 'cart' size = {24} color = 'white'/>),
      }}/>
      <Tab.Screen name="Requests" component={CustomizedOrderScreen} options = {{
         title : 'Requests',
       tabBarIcon : () => (<Ionicons name = 'paper-plane' size = {24} color = 'white'/>),
      }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
