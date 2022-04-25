import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  KeyboardAwareScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Header from "../../Components/Header";
import UButton from "../../Components/HomeComponents/UButton";
import EditContainer from "../../Components/ProfileComponents/EditContainer";
import Color from "../../Constants/Color";

const ProfileEditScreen = (props) => {
  const [username, setUserName] = useState("Alexender");
  const [email, setEmail] = useState("alexender@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("789046589");

  const editUsernameHandler = (name) => {
    setUserName(name);
  };
  const editEmailHandler = (email) => {
    setEmail(email);
  };
  const editPhoneNumberHandler = (number) => {
    setPhoneNumber(number);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <EditContainer onChangeText={editUsernameHandler} value={username}  caretHidden={true}/>
        <EditContainer onChangeText={editEmailHandler} value={email}  caretHidden={true}/>
        <EditContainer
        caretHidden={true}
          onChangeText={editPhoneNumberHandler}
          value={phoneNumber}
        />
        <UButton title="SAVE" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProfileEditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundPrimary,
    alignItems: "center",
  },
});
