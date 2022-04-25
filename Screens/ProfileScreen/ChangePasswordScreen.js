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

const ChangePasswordScreen = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
 

  const editUsernameHandler = (oldPassword) => {
    setOldPassword(oldPassword);
  };
  const editEmailHandler = (newPassword) => {
    setNewPassword(newPassword);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <EditContainer placeholder="Old Password" onChangeText={editUsernameHandler} value={oldPassword} secureTextEntry={true}  />
        <EditContainer placeholder="New Password" onChangeText={editEmailHandler} value={newPassword}  secureTextEntry={true} />
        <UButton title="SAVE" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundPrimary,
    alignItems: "center",
  },
});
