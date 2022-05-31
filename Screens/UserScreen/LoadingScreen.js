import React, {useEffect} from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();



 const LoadingScreen  = (props) => {

    useEffect(    
        onAuthStateChanged(auth, (user) => {
        if (user) {
            props.navigation.navigate('HomeScreen');
          // ...
        } else {
            props.navigation.navigate('Login');
        }
      }),[]);



  return (
   <View style={styles.container}>
    <ActivityIndicator/>
   </View>
  )
 };


export default LoadingScreen;

const styles = StyleSheet.create({
    container:{
        flex : 1,
    }
})