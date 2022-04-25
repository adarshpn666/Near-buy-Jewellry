import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontSize from "../../Constants/FontSize";
import Color from "../../Constants/Color";


const width = Dimensions.get('window').width;

const PurityOption = () => {
  return (
    <View style = {styles.container}>
      <Text style = {{...styles.text}}>Assured purity Check is Available</Text>
      <View style = {{flexDirection : 'row',justifyContent : 'space-between',width : width/2, marginTop : 20}}>
      <View style = {{flexDirection : 'row'}}>
        <Ionicons
          name="radio-button-on"
          size={30}
          style={{ marginRight: 10 }}
        />
        <Text style = {{...styles.text, fontWeight : 'bold'}} >YES</Text>
      </View>
      <View style = {{flexDirection : 'row'}}>
        <Ionicons
          name="radio-button-on"
          size={30}
          style={{ marginRight: 10 }}
        />
        <Text style = {{...styles.text, fontWeight : 'bold'}}>NO</Text>
        </View>
      </View>
    </View>
  );
};

export default PurityOption;

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        backgroundColor : Color.cartColor,
        padding : 10,
        marginVertical : 10,
        borderRadius :30,
    },
    text : {
        fontSize : FontSize.descSize,
        color : Color.textColor,
    },
});
