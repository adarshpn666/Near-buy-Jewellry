import { View, Text, StyleSheet, } from "react-native";
import React from "react";
import EditContainer from "./EditContainer";
import FontSize from "../../Constants/FontSize";

const CustomeText = (props) => {
    return <Text style = {styles.text}>{props.children}</Text>
}

const AddressContainer = () => {
  return (
    <View style = {{marginTop : 10}}>
      <CustomeText>Address line 1 : </CustomeText>
      <EditContainer />
      <CustomeText>District : </CustomeText>
      <EditContainer />  
      <CustomeText>State : </CustomeText>
      <EditContainer />
      <CustomeText>Country : </CustomeText>
      <EditContainer />
      <CustomeText>Pincode : </CustomeText>
      <EditContainer />
    </View>
  );
};

export default AddressContainer;

const styles = StyleSheet.create({
    text : {
        fontSize : FontSize.descSize,
    }
})