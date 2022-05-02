import React from "react";
import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import Color from "../../Constants/Color";
import FontSize from "../../Constants/FontSize";

const width = Dimensions.get('window').width;

const CustomItem = (props) => {
    return (
        <View style = {styles.itemContainer}>
            <Text style = {{...styles.itemText,textAlign : 'center'}} >Product Requested</Text>
            <Text style = {styles.itemText}>Category : {props.item.category?props.item.category : 'Not selected'}</Text>
            <Text  style = {styles.itemText}>Gold Color : {props.item.goldColor?props.item.goldColor : 'Not selected'}</Text>
            <Text  style = {styles.itemText}>Gold Purity : {props.item.goldPurity?props.item.goldPurity : 'Not selected'}</Text>
            <Text  style = {styles.itemText}>Diamond Clarity : {props.item.diamondClarity?props.item.diamondClarity : 'Not selected'}</Text>
            <Text  style = {styles.itemText}>Budget : {props.item.budget?props.item.budget : 'Not selected'}</Text>

        </View>
    );
}

const CustomizedOrderScreen = (props) => {
  const currentOrder = useSelector((state) => state.custom.customOrders);

  return(
  currentOrder.length == 0 ? (
    <View style={styles.emptyContainer}>
      <Text style={styles.text}>No Request Available</Text>
    </View>
  ) : (
    <View style={styles.container}>
  <FlatList
        data = {currentOrder}
        numColumns = {1}
        renderItem = {({item}) => <CustomItem item = {item} key = {item.id} navigation = {props.navigation}/>}
        showsVerticalScrollIndicator = {false}
        contentContainerStyle = {{ alignItems :'center'}}
        style = {styles.listView}
        />
    </View>
  )
  );
};

export default CustomizedOrderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backgroundPrimary,
      },
      emptyContainer : {
        flex: 1,
        backgroundColor: Color.backgroundPrimary,
        justifyContent : 'center',
        alignItems: 'center',
      },
      text : {
          fontSize : FontSize.descSize,
      },
      itemContainer: {
            height : 150,
            width : width/1.1,
            backgroundColor : '#A3E4DB',
            borderRadius : 20,
            marginVertical : 20,
            padding : 10,
      },
      itemText:{
          fontSize : 16,
          color : Color.priceColor
      },
});
