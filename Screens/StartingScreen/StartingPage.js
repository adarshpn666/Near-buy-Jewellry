import React, { useState, useRef, useCallback } from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  FlatList,
  Dimensions,
} from "react-native";

import Heading from "../../Components/StartingComponents/Heading";
import Button1 from "../../Components/StartingComponents/Button1";
import UserLinearGradient from "../../Components/UserLinearGradient";

import { useDispatch, useSelector } from "react-redux";
import { firstTimeApp } from "../../store/actions/auth";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Find your store",
    description: "Find jewellery nearest store at your convenience.",
    buttonTitle: "Next >>",
    buttonValue : "next",
    source: require("../../assets/onboarding/Shop.png"),
  },
  {
    id: "2",
    title: "Buy jewellery",
    description: "Buy jewellery from world class jewellery store.",
    buttonTitle: "Next >>",
    buttonValue : "next",
    source: require("../../assets/onboarding/Necklace.png"),
  },
  {
    id: "3",
    title: "Free Home Delivery",
    description: "Fast and Free home delivery.",
    buttonTitle: "Start >>",
    buttonValue : "start",
    source: require("../../assets/onboarding/delivery.png"),
  },
];

const StartingPage = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  const dispatch = useDispatch();

  const setFirstTimeApp = useCallback( () =>{
    dispatch(firstTimeApp());
},[dispatch]);

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.15,
        }}
      >
        <View style={styles.slideContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index && {
                  ...styles.indicator,
                  backgroundColor: "#80D87E",
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  const SlideItem = ({ item }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <Heading title={item.title} desc={item.description} />
        <Button1 title={item.buttonTitle} onPress={() => goNextSlide(item.buttonValue)} />
        <Image
          source={item.source}
          style={{ width, resizeMode: "contain", height: height * 0.4 }}
        />
      </View>
    );
  };

  const updateCurrentIndex = (e) => {
    const contentOffSetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffSetX / width);
    setCurrentIndex(currentIndex);
  };

  const goNextSlide = (value) => {
    if(value !== "start"){
      const nextIndex = currentIndex + 1;
      if(nextIndex != slides.length){
        const offset = nextIndex * width;
        ref?.current?.scrollToOffset({ offset });
        setCurrentIndex(nextIndex);
      }
    }else{
      setFirstTimeApp();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserLinearGradient>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentIndex}
          pagingEnabled
          data={slides}
          contentContainerStyle={{ height: height * 0.8 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <SlideItem item={item} />}
        />
        <Footer />
      </UserLinearGradient>
    </SafeAreaView>
  );
};

export default StartingPage;

const styles = StyleSheet.create({
  slideContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    backgroundColor: "#C4C4C4",
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
});
