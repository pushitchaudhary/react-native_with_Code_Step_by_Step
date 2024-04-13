import React, { useState , Component, useEffect} from "react";

import { View,Text, StyleSheet, StatusBar, Platform, } from "react-native";

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();
const App = ()=>{

  return(

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Navigator name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

const Home = ()=>{
  return(
    <View>
      <Text>This is home page gjhgjgjgjg gjhgjhgj</Text>
    </View>
  )
}

const Login = ()=>{
  return(
    <View>
      <Text>This is home page </Text>
    </View>
  )
}



const style = StyleSheet.create({
  mainBox : {
    flex : 1,
    marginTop : 80,
    textAlign : 'center',
    alignItems : 'center',
    justifyContent : 'center',
  },

  text : {
    fontSize : 20,
    marginTop : 30
  },

 
 
})



export default App


