import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Header from '../../Components/Header';
import ItemViewContainer from '../../Components/StoreComponents/ItemViewContainer';
import Color from '../../Constants/Color';

import data from '../../database/TempProductData'


 const FavoriteScreen  = (props) => {
  return (
   <View style={styles.container}>
    <ItemViewContainer data = {data}/>
   </View>
  )
 };


export default FavoriteScreen;

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : Color.backgroundPrimary,
    }
})