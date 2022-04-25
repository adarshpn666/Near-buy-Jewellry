import React from 'react'
import { StyleSheet, View, Text,Image, TouchableWithoutFeedback  } from 'react-native'
import { Ionicons } from "@expo/vector-icons";


 const FooterNav  = (props) => {
     const {navigation} = props;

     const navigateFavoriteScreen = () =>{
        navigation.navigate("FavoriteScreen")
     }
     const navigateCartScreen = () =>{
        navigation.navigate("CartScreen")
     }
     const navigateStoreListScreen = () =>{
        navigation.navigate("StoreList")
     }
     
     
  return (
   <View style={{...styles.container,...props.style}}>
    <TouchableWithoutFeedback   onPress={navigateFavoriteScreen } >
    <Ionicons
          name="heart-sharp"
          size={50}
          color="black"
        
        />
    </TouchableWithoutFeedback >
    <TouchableWithoutFeedback onPress={navigateStoreListScreen } >
        <Image source = {require('../../assets/Images/search.png')}/>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback  onPress={navigateCartScreen } >
    <Ionicons
          name="cart"
          size={50}
          color="black"
        />
    </TouchableWithoutFeedback>
   </View>
  )
 };


export default FooterNav;

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent:'space-around',
    }
})