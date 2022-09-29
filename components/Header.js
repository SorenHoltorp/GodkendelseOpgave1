  /* Skal fungerer som en customized header som kan bruges til nav, search og sign out*/


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AntDesign, MaterialIcons, Ionicons} from "@expo/vector-icons";
import styled from 'styled-components/native'

import { useNavigation } from '@react-navigation/native';

const Header = () => {



    const navigation = useNavigation();
}


  return (
    <View>
      <Text>Header</Text>
    </View>
  )


const styles = StyleSheet.create({})

export default Header