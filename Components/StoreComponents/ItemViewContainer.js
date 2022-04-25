import React from "react";
import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";

import Item from "./Item";

const ItemViewContainer = (props) => {
  return (
  
    <ScrollView  showsVerticalScrollIndicator = {false}>
      <View style ={styles.container}>
      {props.num?props.data.slice(0,props.num).map((item) => <Item key = {item.id} item = {item}/>) : props.data.map((item) => <Item key = {item.id} item = {item}/>)
      }
      </View>
    </ScrollView>
   
  );
};

export default ItemViewContainer;

const styles = StyleSheet.create({
    container: {flexDirection:'row', flexWrap:'wrap', justifyContent :'center'}
});
