import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Keyboard } from "react-native";

import Navigation from "./navigation/Navigation";
import HomeScreen from "./Screens/UserScreen/HomeScreen";

import PaymentScreen from './Screens/PaymentScreen/PaymentScreen'
import TestScreen from "./Screens/Test/TestScreen";





export default function App() {
  return (
    <View style = {styles.container}>
      {/* <PaymentScreen/> */}
      <Navigation/>
      {/* <TestScreen/> */}
    </View>
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
