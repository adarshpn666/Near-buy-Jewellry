import { Stack, Center, VStack, HStack, Alert, Text, IconButton, CloseIcon } from 'native-base';
import React, {useState} from 'react'
import {StyleSheet} from 'react-native';




 const CustomAlert  = (props) => {
    

  return (

        <Alert w="90%" status="error" style ={{display : props.isError?"flex":"none", marginTop:15}} >
              <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} justifyContent="space-between">
                  <HStack space={2} flexShrink={1}>
                    <Alert.Icon mt="1" />
                    <Text fontSize="md" color="coolGray.800">
                      {props.title?props.title: "Invalid entries"}
                    </Text>
                  </HStack>
                  <IconButton variant="unstyled" _focus={{
                borderWidth: 0
              }} icon={<CloseIcon size="3" color="coolGray.600" />} onPress = {() => {props.setIsError(false)}} />
                </HStack>
              </VStack>
            </Alert>
  
  )
 };


export default CustomAlert;

const styles = StyleSheet.create({});
