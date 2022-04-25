import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import RecentPurchaseView from "../../Components/HomeComponents/RecentPurchaseView";
import FooterNav from "../../Components/HomeComponents/FooterNav";
import SliderItem from "../../Components/HomeComponents/SliderItem";
import GoldRate from "../../Components/HomeComponents/GoldRate";
import Color from "../../Constants/Color";
import FontSize from "../../Constants/FontSize";
import Item from "../../Components/StoreComponents/Item";

import data from "../../database/TempProductData";
import ItemViewContainer from "../../Components/StoreComponents/ItemViewContainer";
import UButton from "../../Components/HomeComponents/UButton";

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

  const updateCurrentIndex = (e) => {
    const contentOffSetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffSetX / width);
    setCurrentIndex(currentIndex);
  };

  const moveScreen = () => {
    props.navigation.navigate("RecentPurchaseScreen");
  };

  const navigateStoreList = () => {
    props.navigation.navigate('StoreList');
  }

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
            Hello, <Text style={styles.name}>{userName}👋</Text>
          </Text>
          <Image source={require("../../assets/Images/Frame.png")} />
        </View>

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
              height: height * 0.15,
              width: width * 0.9,
            }}
          />
          <RecentPurchaseView
            style={{ height: height * 0.28, width: width * 0.9 }}
            data={data}
            navigation={props.navigation}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <Text
            style={{
              fontSize: FontSize.homeSubHeader,
              color: Color.recentHome,
            }}
          >
            ITEMS AROUND YOU
          </Text>
          <View style={{ flex: 1 }}>
            <ItemViewContainer data={data} num={4} />
          </View>
        </View>
        <UButton title="Explore More" onPress = {navigateStoreList}/>
      </ScrollView>
      <FooterNav
        style={{ height: height * 0.08, width }}
        navigation={props.navigation}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: Color.backgroundPrimary,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
