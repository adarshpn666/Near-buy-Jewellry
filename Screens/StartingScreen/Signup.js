import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { auth } from "../../firebase/firebase-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { Picker } from "@react-native-picker/picker";

import FontSize from "../../Constants/FontSize";
import Color from "../../Constants/Color";
import UserLinearGradient from "../../Components/UserLinearGradient";
import Input from "../../Components/Input";
import Button1 from "../../Components/StartingComponents/Button1";

const Signup = (props) => {
  const [selectedGender, setSelectedGender] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(null);

  const signupHandler = () => {
    createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          phoneNumber: mobileNumber
        })
          .then(() => {
            // Profile updated!
            console.log(mobileNumber);
            console.log(user);
            props.navigation.navigate("Login");
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        // ...
      })
      .catch((error) => {
        console.log(error.message);
        // ..
      });
  };

  const userNameInputHandler = (name) => {
    setName(name);
  };

  const userEmailInputHandler = (email) => {
    setEmail(email);
  };
  const userMobileNumberInputHandler = (number) => {
    setMobileNumber(number);
  };
  const userPasswordInputHandler = (password) => {
    setPassword(password);
  };
  const userAgeInputHandler = (age) => {
    setAge(age);
  };

  return (
    <KeyboardAwareScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <UserLinearGradient>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Welcome New User !</Text>
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Name"
                style={styles.input}
                onChangeText={userNameInputHandler}
                value={name}
              />
              <Input
                placeholder="Email"
                style={styles.input}
                onChangeText={userEmailInputHandler}
                value={email}
              />
              <Input
                placeholder="Mobile Number"
                style={styles.input}
                maxLength={10}
                minLength={10}
                keyboardType="number-pad"
                onChangeText={userMobileNumberInputHandler}
                value={mobileNumber}
              />
              <Input
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={userPasswordInputHandler}
                value={password}
              />
              <View style={styles.smallInput}>
                <Input
                  placeholder="Age"
                  style={{ width: 100, paddingLeft: 25 }}
                  blurOnSubmit
                  keyboardType="number-pad"
                  maxLength={2}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={userAgeInputHandler}
                  value={age}
                />
                <Picker
                  style={styles.pickerstyle}
                  selectedValue={selectedGender}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedGender(itemValue)
                  }
                >
                  <Picker.Item label="Gender" value="" />
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                  <Picker.Item label="Others" value="others" />
                </Picker>
              </View>
            </View>
            <Button1
              title="Sign Up >>"
              styleButton={styles.button}
              onPress={signupHandler}
            />
            <Text
              style={{ ...styles.text, color: Color.newUserColor }}
              onPress={() => {
                props.navigation.navigate("Login");
              }}
            >
              Already user?
            </Text>
          </UserLinearGradient>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default Signup;

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
    paddingTop: 20,
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 50,
  },
  input: {
    marginBottom: 20,
  },

  smallInput: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  pickerstyle: {
    width: 130,
    backgroundColor: Color.primaryText,
    opacity: 0.8,
    color: Color.inputColor,
  },
  button: {
    marginTop: 50,
  },
  text: {
    fontSize: FontSize.descSize,
    textDecorationLine: "underline",
  },
});
