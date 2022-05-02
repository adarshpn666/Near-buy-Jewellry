import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../../Components//CustomizationComponents/DropDown";
import ImageUploader from "../../Components/CustomizationComponents/ImageUploader";
import UButton from "../../Components/HomeComponents/UButton";
import Customize from "../../models/customize";

const width = Dimensions.get("window").width;

import {
  DIAMOND_CLARITY,
  GOLD_COLOR,
  GOLD_PURITY,
  JEWELLERY_CATEGORIES,
} from "../../Constants/CustomizeData";
import { addOrder } from "../../store/actions/customize";

const CustomizationScreen = (props) => {
  const [diamondClarityValue, setDiamondClarityValue] = useState(null);
  const [goldColorValue, setGoldColorValue] = useState(null);
  const [goldPurityValue, setGoldPurityValue] = useState(null);
  const [jewelleryCategoriesValue, setJewelleryCategoriesValue] =
    useState(null);
  const [budgetValue, setBudgetValue] = useState(null);
  const [contactNumberValue, setContactNumberValue] = useState(null);
  const [descriptionValue, setDescriptionValue] = useState(null);

  const dispatch = useDispatch();
  let id = Math.floor(Math.random() * 100);
  const order = new Customize(id,jewelleryCategoriesValue,goldColorValue,goldPurityValue,diamondClarityValue,budgetValue);

  const requestHandler = useCallback(() => {
    dispatch(addOrder(order));
    props.navigation.navigate('CustomizationSuccessScreen');
    },[dispatch,order]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.selctionContainer}>
            <Text style={styles.labelStyle}>Choose Category</Text>
            <Dropdown
              data={JEWELLERY_CATEGORIES}
              value={jewelleryCategoriesValue}
              setValue={(value) => {
                setJewelleryCategoriesValue(value);
              }}
            />
          </View>
          <View style={styles.selctionContainer}>
            <Text style={styles.labelStyle}>Gold Color</Text>
            <Dropdown
              data={GOLD_COLOR}
              value={goldColorValue}
              setValue={(value) => {
                setGoldColorValue(value);
              }}
            />
          </View>
          <View style={styles.selctionContainer}>
            <Text style={styles.labelStyle}>Gold Purity</Text>
            <Dropdown
              data={GOLD_PURITY}
              value={goldPurityValue}
              setValue={(value) => {
                setGoldPurityValue(value);
              }}
            />
          </View>
          <View style={styles.selctionContainer}>
            <Text style={styles.labelStyle}>Diamond Clarity</Text>
            <Dropdown
              data={DIAMOND_CLARITY}
              value={diamondClarityValue}
              setValue={(value) => {
                setDiamondClarityValue(value);
              }}
            />
          </View>
          <View style={styles.selctionContainer}>
            <Text style={{ ...styles.labelStyle }}>Your Budget </Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(value) => setBudgetValue(value)}
              value={budgetValue}
            />
          </View>
          <TextInput
            style={{
              ...styles.inputStyle,
              height: 200,
              textAlignVertical: "top",
              width: width / 1.1,
             
            }}
            placeholder="Description"
            multiline={true}
            numberOfLines={10}
            onChangeText={(value) => setDescriptionValue(value)}
            value={descriptionValue}
          />
          <Text >{descriptionValue}</Text> 
          <View style={styles.selctionContainer}>
            <Text style={{ ...styles.labelStyle }}>Contact Number </Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(value) => setContactNumberValue(value)}
              value={contactNumberValue}
            />
          </View>
          <ImageUploader />

          <UButton title="REQUEST" style={{}} onPress = {requestHandler} />
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default CustomizationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  selctionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  labelStyle: { fontSize: 16, width: 150, marginRight: -20 },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    height: 40,
    width: 250,
    padding: 10,
    marginTop: 20,
    fontSize: 16,
  },
});
