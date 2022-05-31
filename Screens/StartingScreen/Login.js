import React, { useState ,useCallback} from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";


import { useDispatch, useSelector } from "react-redux";

import { signInUser } from "../../store/actions/auth";




import FontSize from "../../Constants/FontSize";
import Color from "../../Constants/Color";
import UserLinearGradient from "../../Components/UserLinearGradient";
import Input from "../../Components/Input";
import Button1 from "../../Components/StartingComponents/Button1"; 

import CustomAlert from "../../Components/AuthComponents/CustomAlert";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const userCredential = {email: email, password : password};
  
  const dispatch = useDispatch();

  

  const userInputHandler = (value) => {
    setEmail(value);
  };

  const userPasswordHandler = (value) => {
    setPassword(value);
  };

  const resetInputHandler = () => {
    setPassword('');
    setEmail('');
  }
  
  const loginHandler = useCallback( () =>{
      dispatch(signInUser(userCredential,props, setIsError,setErrorMessage));
      resetInputHandler();
      Keyboard.dismiss();
  },[dispatch,userCredential]);


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
              value={email}
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
              props.navigation.navigate("Signup");
            }}
          >
            New user?
          </Text>
          <CustomAlert title = {errorMessage} setIsError = {setIsError} isError = {isError}/>
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
