import React from 'react'
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native'
import Header from '../../Components/Header';
import RecentPurchaseItem from '../../Components/HomeComponents/RecentPurchaseItem';
import RecentPurchaseView from '../../Components/HomeComponents/RecentPurchaseView'
import Color from '../../Constants/Color';

import data from '../../data/TempProductData';



 const RecentPurchaseScreen  = () => {
  return (
   <View style={styles.container}>
       <ScrollView  showsVerticalScrollIndicator = {false}>
        {data.map((item) => <RecentPurchaseItem key = {item.id} item = {item} style = {{backgroundColor : Color.primaryText, marginVertical : 20,borderRadius :20}}/>)}
       </ScrollView>
   </View>
  )
 };


export default RecentPurchaseScreen;

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor : Color.backgroundPrimary,
        alignItems : 'center',
    }
})