import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ItemViewContainer from '../../Components/StoreComponents/ItemViewContainer';
import data from '../../database/TempProductData'

 const TestScreen  = () => {
  return (
   <View style = {{marginTop : 40, backgroundColor : 'red'}}>
    <ItemViewContainer data = {data}/>
    <Text>test</Text>
   </View>
  )
 };


export default TestScreen;

const styles = StyleSheet.create({
    
})