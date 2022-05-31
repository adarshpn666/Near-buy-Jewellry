import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from "react-native";
import Header from "../../Components/Header";

import Store from "../../Components/Store/Store";

// import data from '../../data/TempShopData';

import { useDispatch, useSelector } from "react-redux";
import { loadingStores } from "../../store/actions/stores";

const StoreList = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(loadingStores());
    setIsLoading(false);
  },[dispatch]);

  const data = useSelector((state) => state.stores.stores);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text>No Shop Available</Text>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {data.map((item, key) => {
            return (
              <Store key = {item.id} data = {item} navigation = {props.navigation}/>
            );
          })}
        </View>
      </ScrollView>
    );
  }
};

export default StoreList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 30,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
