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
            height: 200,
            width: 350,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: Color.SliderColor,
              borderRadius: 30,
              paddingVertical: 30,
              paddingHorizontal  :10,
            }}
          >
            <Text style={{ marginBottom : 5,...styles.text, fontWeight: "bold" }} numberOfLines = {3}>
              {item.title}
            </Text>
            <Text style={{ ...styles.text, fontSize: 20}}>
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