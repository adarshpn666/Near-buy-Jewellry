import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Keyboard } from "react-native";
import { NativeBaseProvider } from 'native-base';
// import { LogBox } from 'react-native';

// LogBox.ignoreLogs(['Setting a timer']);

import store from "./store/store";
import {Provider} from 'react-redux';

import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return (
    <NativeBaseProvider>
    <Provider store = {store}>
    <View style = {styles.container}>
      <AppNavigation/>
    </View>
    </Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
