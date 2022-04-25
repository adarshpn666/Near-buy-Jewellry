import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import FontSize from '../../Constants/FontSize';
import Color from '../../Constants/Color';


 const Heading  = (props) => {
  return (
   <View>
    <Text style = {{...styles.title, ...styles.main}}>{props.title}</Text>
    <Text style = {{...styles.desc,...styles.main}}>{props.desc}</Text>
   </View>
  )
 };


export default Heading;

const styles = StyleSheet.create({
    main:{
        color : Color.primaryText,
        alignSelf:'center',
        textAlign: 'center'
    },
    title: {
        width: 290,
        height : 100,
        fontSize: FontSize.headerSize,
        fontWeight:'bold',
    }, 
    desc : {
        fontSize: FontSize.descSize,
        width: 350,
        marginTop : 10,
    }

})