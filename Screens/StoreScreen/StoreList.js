import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "../../Components/Header";

import Store from "../../Components/Store/Store";

import data from '../../data/TempShopData';

const StoreList = (props) => {
  return (
    <ScrollView  showsVerticalScrollIndicator = {false}>
    <View style={styles.container}>
      {data.map((item, key) => {
        return (
          <Store key = {item.id} data = {item} navigation = {props.navigation}/>
        );
      })}
    
    </View>
    </ScrollView>
    
  );
};

export default StoreList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom : 30,
  },
});
