import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import Color from '../../Constants/Color';

const width = Dimensions.get('window').width;

 const RecentPurchaseItem  = (props) => {
     const data  = props.item;
     const delivered = true;
  return (
   <View style = {{...styles.container,...props.style}}>
    <Image source = {data.Image} style = {{height : 103, width : 103, borderRadius : 30}}/>
    <View style = {styles.details}>
        <Text style = {{fontSize  :16, width : 250}}>{data.name}</Text>
        <Text style = {styles.smallDetalils}>{data.certificationDetails.slice(0,2).map((content) => content)}</Text> 
    </View>
    <Text style = {[styles.status,delivered ? {...styles.delivered} : {...styles.notdelivered}]}>{delivered?'delivered' : 'On the Way' }</Text>
   </View>
  )
 };


export default RecentPurchaseItem;

const styles = StyleSheet.create({
    container : {
        flexDirection  :'row',
        width : width/1.1,
        // height : 120,
        marginTop : 10,
        borderBottomLeftRadius : 30,
        borderTopLeftRadius : 30,
        padding : 10,
    },
    details :{
        flex : 1,
        marginLeft : 10,
    },
    smallDetalils :{
        fontSize  :10,
        color : Color.recentHome,
    },
    status :{
        fontSize  :13,
        color : Color.primaryText,
        width : 80,
        height  :20,
        textAlign : 'center',
        borderRadius : 10,
        top : 60,

    },
    delivered : {
        backgroundColor :'rgba(15,138,56,0.8)',
    },
    notdelivered : {
        backgroundColor :'#FCD900',
    }
})