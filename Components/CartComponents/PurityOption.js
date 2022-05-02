import React from "react";
import { StyleSheet, View, Text, Dimensions, Modal, TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontSize from "../../Constants/FontSize";
import Color from "../../Constants/Color";
import { RadioButton } from "react-native-paper";


const {height, width} = Dimensions.get('window');

const PurityOption = () => {
  const [checked, setChecked] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style = {styles.container}>
            <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        
      >
        <View style  = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
        <View style={styles.model}>
        <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
          <Text style = {styles.infoheader}>Info</Text>
          <Ionicons name = "close" size = {30} onPress = {() => {setModalVisible(false)}} color = 'white'/>
        </View>
        <View style = {{marginTop : 20,}}>
          <Text style = {{color : Color.primaryText, fontSize : 16}}>
            Purity check will assure you the quality of the product. The shop owner will send one of his employees to your 
            house for the purity check. The employee will check the jewellery in front of customer, along with that employee will show
            them all the necessary certification required to prove the purity of the jewellery including BIS Hallmark.
          </Text>
        </View>
        </View>
        </View>
  
      </Modal>
      <View style = {{flexDirection : 'row'}}>
        <Text style = {{...styles.text}}>Assured purity Check is Available</Text>
        <View style = {styles.infoContainer}>
        <Ionicons name = 'help' size = {24} onPress = {() => {setModalVisible(true)}}/>
        </View>
      </View>
      
      <View style = {{flexDirection : 'row',justifyContent : 'space-between',width : width/2, marginTop : 20}}>
      <View style = {{flexDirection : 'row', alignItems : 'center'}}>
      <RadioButton
            value= 'yes'
            status={checked === 'yes' ? "checked" : "unchecked"}
            onPress={() => setChecked('yes')}
          />
        <Text style = {{...styles.text, fontWeight : 'bold'}} >YES</Text>
      </View>
      <View style = {{flexDirection : 'row',  alignItems : 'center'}}>
      <RadioButton
            value='no'
            status={checked === 'no' ? "checked" : "unchecked"}
            onPress={() => setChecked('no')}
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
    infoContainer :{
      backgroundColor : Color.priceColor,
      width : 25,
      borderRadius : 20,
      alignItems : 'center',
      marginLeft : 20,
    },
    model:{
      height : 350,
      backgroundColor : 'rgba(141, 141, 170,0.95)',
      borderRadius : 20,
      padding : 30,
      width : width/1.1,
    },
    infoheader :{
      color :Color.primaryText,
      fontSize : FontSize.descSize,
    }
});
