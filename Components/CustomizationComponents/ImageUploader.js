import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';




 const ImageUploader  = () => {
    const [image, setImage] = useState(null);

    const choosePhotoFromLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync();
        setImage(result.uri)
    }



  return (
   <View style = {styles.container}>
       {image && 
       <Image source = {{uri : image}} style = {{width : 300, marginVertical : 10, height : 300}}/>}
    <Button title = 'Choose Photo' onPress={choosePhotoFromLibrary} style = {{}}/>
   </View>
  )
 };


export default ImageUploader;

const styles = StyleSheet.create({
    container : {
        marginVertical : 20,
    },
})