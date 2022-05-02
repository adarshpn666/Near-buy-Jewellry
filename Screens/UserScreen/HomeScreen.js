import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import RecentPurchaseView from "../../Components/HomeComponents/RecentPurchaseView";
import SliderItem from "../../Components/HomeComponents/SliderItem";
import GoldRate from "../../Components/HomeComponents/GoldRate";
import Color from "../../Constants/Color";
import data from "../../data/TempProductData";

import { useSelector } from "react-redux";

const userName = "Alex";
const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Bridal Collections",
    description: "",
    footer: "Designed By Legendary Jewellers",
    source: require("../../assets/slider/item1.png"),
  },
  {
    id: "2",
    title: "Make Your Engagement Memorable",
    description: "",
    footer: "Engagement Ring Collections",
    source: require("../../assets/slider/item2.png"),
  },
  {
    id: "3",
    title: "10% OFF",
    description: "Enjoy 10% Off All The Designer Jewelleries.",
    footer: "",
    source: require("../../assets/slider/item2.png"),
  },
];

const HomeScreen = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const curruser = useSelector((state) => state.logged.user);

  const updateCurrentIndex = (e) => {
    const contentOffSetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffSetX / width);
    setCurrentIndex(currentIndex);
  };

  const moveScreen = () => {
    props.navigation.navigate("RecentPurchaseScreen");
  };

  const navigateStoreList = () => {
    props.navigation.navigate("StoreList");
  };

  const Footer = () => {
    return (
      <View style={{ marginTop: 0 }}>
        <View style={styles.slideContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index && {
                  ...styles.indicator,
                  backgroundColor: "#000000",
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
    
          <Text style={styles.greeting}>
            Hello, <Text style={styles.name}>{props.route.params.name}👋</Text>
          </Text>
        </View>
        <TouchableHighlight onPress={() => console.log(props)}>
           <Text>ALL</Text> 
          </TouchableHighlight>

        <FlatList
          // ref={ref}
          onMomentumScrollEnd={updateCurrentIndex}
          pagingEnabled
          data={slides}
          contentContainerStyle={{ height: 240 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <SliderItem item={item} />}
        />
        <Footer />
        <View style={{ alignItems: "center" }}>
          <GoldRate
            style={{
              height: 150,
              width: width * 0.9,
            }}
          />
          <RecentPurchaseView
            style={{ height: 300, width: width * 0.9 }}
            data={data}
            navigation={props.navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

HomeScreen.navigationOptions = {
  headerTitle: "Header",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundPrimary,
    padding: 10,
  },

  header: {
    alignItems: "flex-start",
  },

  greeting: {
    fontSize: 32,
    fontWeight: "bold",
    color: Color.greetingColor,
    width: 250,
  },
  name: {
    fontSize: 36,
  },

  slideContainer: {
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
