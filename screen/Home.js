/*Mangler input*/
/*Det eneste som er tilføjet her er baggrundskærmen som er universel på alle views lige nu.*/


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Baggrund from "../assets/Backgroundlogin.png"
import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar';


export default function Home() {
  return (
    <>
    <StatusBar style ="light"/>
      <Container>
       <ImageBackground source={Baggrund} resizeMode="cover">
         </ImageBackground>
        </Container>
      </>
  )
}


const Container = styled.ScrollView`
	flex: 1;
    background-color: #000;
`
const ImageBackground = styled.ImageBackground`
    flex: 1;
    height: 1000px
`
