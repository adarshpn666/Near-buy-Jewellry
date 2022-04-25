import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native'

import Color from '../../Constants/Color';
import FontSize from '../../Constants/FontSize';

const {width, height} = Dimensions.get('window');

const SliderItem = ({item}) => {
    return (
      <View
        style={{ alignItems: "center", marginTop: 15, marginHorizontal: 10 }}
      >
        <ImageBackground
          source={item.source}
          imageStyle={{ borderRadius: 30 }}
          style={{
            height: height * 0.25,
            width: width * 0.95,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: Color.SliderColor,
              borderRadius: 30,
              padding: 30,
            }}
          >
            <Text style={{ flex: 1, ...styles.text, fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Text style={{ ...styles.text, fontSize: 20, flex: 0.6 }}>
              {item.description}
            </Text>
            <Text style={{ ...styles.text, fontSize: 16 }}>{item.footer}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

export default SliderItem;

const styles = StyleSheet.create({
  text: {
    color: Color.primaryText,
    fontSize: FontSize.storeTitle,
  },
})