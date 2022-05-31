import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ItemViewContainer from "../../Components/StoreComponents/ItemViewContainer";
import Color from "../../Constants/Color";

import { useSelector } from "react-redux";
import FontSize from "../../Constants/FontSize";

const FavoriteScreen = (props) => {
  const currentFavorites = useSelector(
    (state) => state.favorite.favoritesProducts
  );
  return currentFavorites.length == 0 ? (
    <View style = {styles.emptyContainer}>
      <Text style = {styles.text}>No Favorite Products</Text>
    </View>
  ) : (
    <View style={styles.container}>
      {/* <ItemViewContainer
        data={currentFavorites}
        navigation={props.navigation}
      /> */}
      {currentFavorites.map((item) => <Text>item</Text>)}
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundPrimary,
  },
  emptyContainer : {
    flex: 1,
    backgroundColor: Color.backgroundPrimary,
    justifyContent : 'center',
    alignItems: 'center',
  },
  text : {
      fontSize : FontSize.descSize,
  }
});
