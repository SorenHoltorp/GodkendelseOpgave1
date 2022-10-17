
import {StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import Baggrund from "../assets/Baggrundmindre.png"
import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Home() {

  const handleSignOut = () => {
    auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
}

    const navigation = useNavigation()

  /* Liiidt for simple logud, men det var nødvendigt for at teste */
    return (
      <>
      <StatusBar style ="light"/>
         <ImageBackground source={Baggrund} resizeMode="stretch"></ImageBackground>
         <View style={styles.Container}>
          <Text style={styles.userDetails}> Bruger "{auth.currentUser?.email}" er logget ind</Text>
          <Button style={styles.logud} title='Tryk for at logge ud' onPress={handleSignOut}></Button>
          </View>
        </>
    )
  }
  
const ImageBackground = styled.ImageBackground`
  flex: 1;
  height: 650
`

const styles = StyleSheet.create({
  Container:{
    backgroundColor: "transparent",
  },
  logud:{
    alignItems: 'center',
    justifyContent: "center",
  },
  userDetails:{
    alignSelf: "center",
    justifyContent: "center",
  }

})