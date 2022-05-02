import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";


import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import ProfileEditScreen from "../Screens/ProfileScreen/ProfileEditScreen";
import HeaderButton from "../Components/Navigation/HeaderButton";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import BottomTabNavigation from "./BottomTabNavigation";

import CustomDrawerContent from './DrawerContent';
import FavoriteScreen from "../Screens/UserScreen/FavoriteScreen";


const Drawer = createDrawerNavigator();





const customScreeOptions = {
  drawerStyle: {
    // backgroundColor: '#B5FE83',
  },
};

const DrawerNavigation = () => {

 
  return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} useLegacyImplementation screenOptions={customScreeOptions} >
        <Drawer.Screen name="Home" component={BottomTabNavigation} />
        <Drawer.Screen name="Favorites" component={FavoriteScreen}  />
      </Drawer.Navigator>
  );
};

export default DrawerNavigation;
