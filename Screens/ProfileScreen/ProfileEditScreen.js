import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
    <KeyboardAwareScrollView showsVerticalScrollIndicator = {false}>
      <View  style={styles.container}>
      <Image source = {require ('../../assets/paymentImage/success.png')} style = {{width : 100, height : 100, margin: 20}} />
        <EditContainer onChangeText={editUsernameHandler} value={username} selectionColor={'black'} />
        <EditContainer onChangeText={editEmailHandler} value={email}  selectionColor={'black'}/>
        <EditContainer
          selectionColor={'black'}
          onChangeText={editPhoneNumberHandler}
          value={phoneNumber}
        />
        <UButton title="SAVE"  style = {styles.button}/>
        </View>
    </KeyboardAwareScrollView>

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
  button : {
    height : 50,
    width : 200,
    borderRadius  :20,
    backgroundColor : '#3457D5',
  }
});
