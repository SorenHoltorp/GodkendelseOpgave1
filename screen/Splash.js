import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { auth } from "../firebase"
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'

/*Dette er en anden måde at style på, hidtil kendt brugte jeg styleSheet, men denne måde jeg godt li*/
const Container = styled.View`
        flex: 1;
        background-color black;
        justify content: center,
        align-items: center
`

//Hvis brugeren ikke er logget ind så navigeres de til login skærmen efter splashen, ellers hjemmeskærm ved login token.
const Splash = ({navigation}) => {
      
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(authUser) {
          navigation.replace("Home")
        } else { 
          navigation.replace("Login")
        }
      })
        return() => {
          unsubscribe();
        }

  }, [])

  return (
        <>
        <StatusBar style='light'/>
        <Container />

        </>
  )
    
        
}


export default Splash