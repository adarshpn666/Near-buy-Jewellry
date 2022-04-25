import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";

import FontSize from "../../Constants/FontSize";
import Color from "../../Constants/Color";
import UserLinearGradient from "../../Components/UserLinearGradient";
import Input from "../../Components/Input";
import Button1 from "../../Components/StartingComponents/Button1"; 

const userData = {
  username : 'Alex',
  password : 'qwertyuiop'
}

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userInputHandler = (value) => {
    setUsername(value);
  };

  const userPasswordHandler = (value) => {
    setPassword(value);
  };

  const resetInputHandler = () => {
    setPassword('');
    setUsername('');
  }

  const loginHandler = () => {
    if(username === userData.username){
      if(password === userData.password){
        navigation.navigate("HomeScreen");
        setPassword('');
        setUsername('');
        Keyboard.dismiss();
      }else{
        Alert.alert("Wrong Password", "", [
          { title: "Okay", style: "destructive", onPress: resetInputHandler },
        ]);
      }
    }else{
      Alert.alert("Invalid UserName", "enter correct User name", [
        { title: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ flex: 1 }}>
        <UserLinearGradient style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Welcome Back !</Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Email"
              style={styles.input}
              onChangeText={userInputHandler}
              value={username}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={userPasswordHandler}
              value={password}
            />
          </View>
            <Button1 title="Login >>" styleButton={styles.button}  onPress={loginHandler}/>

          {/* <Text style={{ ...styles.text, color: "#07485C", marginBottom: 30 }}>
            forgot password ?
          </Text> */}
          <Text
            style={{ ...styles.text, color: Color.newUserColor }}
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            New user?
          </Text>
        </UserLinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: FontSize.headerSize,
    fontWeight: "bold",
    color: Color.primaryText,
  },
  headerContainer: {
    paddingTop: 70,
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 50,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 50,
  },
  text: {
    fontSize: FontSize.descSize,
    textDecorationLine: "underline",
  },
});
