/*Mangler input*/
/*Det eneste som er tilføjet her er baggrundskærmen som er universel på alle views lige nu.*/


import {StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import Baggrund from "../assets/Backgroundlogin.png"
import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Home() {

  const navigation = useNavigation()


  const handleSignOut = () => {
    auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
}


/* Liiidt for simple logud, men det var nødvendigt for at teste */
  return (
    <>
    <StatusBar style ="light"/>
      <Container>
       <ImageBackground source={Baggrund} resizeMode="cover">
         </ImageBackground>
         
        </Container>
        <View style={styles.Container}>
        <Text style={styles.userDetails}> Bruger "{auth.currentUser?.email}" er logget ind</Text>
        <Button style={styles.logud} title='Tryk for at logge ud' onPress={handleSignOut}></Button>
        </View>

      </>
  )
}


const Container = styled.ScrollView`
	flex: 1;
    background-color: #000;
    align-content: center
`
const ImageBackground = styled.ImageBackground`
    flex: 1;
    height: 1000
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