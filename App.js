import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Keyboard } from "react-native";

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import Navigation from "./navigation/Navigation";
import favoriteReducer from "./store/reducers/favorites";
import customReducer from "./store/reducers/customize";
import loggedUserReducer from "./store/reducers/auth";


const rootReducer = combineReducers({
  favorite: favoriteReducer,
  custom : customReducer,
  logged : loggedUserReducer
});

const store = createStore(rootReducer);





export default function App() {
  return (
    <Provider store = {store}>
    <View style = {styles.container}>
      <Navigation/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
