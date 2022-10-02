import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native" 
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from "./screen/Login"
import Register from './screen/Register';
import Splash from './screen/Splash';
import Home from './screen/Home';
import Profil from './screen/Profil';
import HentMad from './screen/HentMad';
import GivMad from './screen/GivMad';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AntDesign, MaterialIcons, Ionicons, FontAwesome} from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  function BottomStackScreen(){
    return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "orange",
        swipeEnabled: true,
        style:{
          backgroundColor: "#141414",
          borderTopWidth: 0,
          elevation: 0,
          shadowOffset: {
            width: 0, height: 0
          },
          height: 60,
          paddingBottom: 10,
        }
      }}
      screenOptions={{
        tabBarItemStyle: {flexDirection: "row"}
      }}
      >
        <Tab.Screen name="Dashboard" component={Home} options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={30} color={color} style={{ fontWeight: "bold", marginLeft: 10, marginBottom: 25, marginTop: -20, }} />
        }} />
        <Tab.Screen name="Profil" component={Home} options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="settings" size={30} color={color} style={{ fontWeight: "bold", marginLeft: 10, marginBottom: 25, marginTop: -20, }} />
        }} />
        <Tab.Screen name="Giv Mad" component={Home} options={{
          tabBarIcon: ({ color }) => <FontAwesome name="recycle" size={30} color={color} style={{marginLeft: 10, marginBottom: 25, marginTop: -15,}} />
        }} />
        <Tab.Screen name="Hent Mad" component={Home} options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="food-bank" size={30} color={color} style={{ fontWeight: "bold", marginLeft: 10, marginBottom: 25, marginTop: -20, }} />
        }} />
      </Tab.Navigator>

    )
    
  }

  const screenOptions = {
    headershown: false,
    ...TransitionPresets.SlideFromRightIOS,
  }

  return (
    <NavigationContainer>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1,}} keyboardVerticalOffset={Platform.OS ==='ios' ? -64 : 0} >
        <Stack.Navigator initialRouteName='Splash' screenOptions={screenOptions}>
          <Stack.Screen name="Login" component={Login} options={{
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: "horizontal",
            headerShown: false,
              }}/> 
           <Stack.Screen name="Register" component={Register} options={{
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: "horizontal",
            headerShown: false,
             }}/> 
             <Stack.Screen name="Splash" component={Splash} options={{
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: "horizontal",
             }}/> 
             <Stack.Screen name="BottomStack" component={BottomStackScreen} options={{
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: "horizontal",
            headerShown: false,

             }}/> 

             <Stack.Screen name = "GivMad" component={GivMad} /> 
             <Stack.Screen name = "HentMad" component={HentMad} /> 
             <Stack.Screen name = "Profil" component={Profil} /> 
        </Stack.Navigator>
    </KeyboardAvoidingView>
    </NavigationContainer>
    
  );
}

