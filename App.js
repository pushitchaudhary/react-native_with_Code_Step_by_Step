import React, { useState } from "react";

import { View,Text, Button, TextInput, StyleSheet, ScrollView  } from "react-native";


export default function App() {

  const User = [
    {
      id : 1,
      name : 'ram',
      age : 25
    },{
      id : 2,
      name : 'rams',
      age : 25
    },{
      id : 3,
      name : 'har9',
      age : 25
    },{
      id : 4,
      name : 'radfm',
      age : 25
    },{
      id : 5,
      name : 'sdf',
      age : 25
    },{
      id : 6,
      name : 'erte',
      age : 25
    },{
      id : 7,
      name : 'bfgd',
      age : 25
    },{
      id : 8,
      name : 't4t4t',
      age : 25
    },{
      id : 9,
      name : 'hhfsf',
      age : 25
    }, {
      id : 1,
      name : 'ram',
      age : 25
    },{
      id : 2,
      name : 'rams',
      age : 25
    },{
      id : 3,
      name : 'har9',
      age : 25
    },{
      id : 4,
      name : 'radfm',
      age : 25
    },{
      id : 5,
      name : 'sdf',
      age : 25
    },{
      id : 6,
      name : 'erte',
      age : 25
    },{
      id : 7,
      name : 'bfgd',
      age : 25
    },{
      id : 8,
      name : 't4t4t',
      age : 25
    },{
      id : 9,
      name : 'hhfsf',
      age : 25
    }, {
      id : 1,
      name : 'ram',
      age : 25
    },{
      id : 2,
      name : 'rams',
      age : 25
    },{
      id : 3,
      name : 'har9',
      age : 25
    },{
      id : 4,
      name : 'radfm',
      age : 25
    },{
      id : 5,
      name : 'sdf',
      age : 25
    },{
      id : 6,
      name : 'erte',
      age : 25
    },{
      id : 7,
      name : 'bfgd',
      age : 25
    },{
      id : 8,
      name : 't4t4t',
      age : 25
    },{
      id : 9,
      name : 'hhfsf',
      age : 25
    },
  ]

  return(
  <View style={{marginTop: 80}}>
    <ScrollView>
    <View style={{flex:1, flexWrap :'wrap', flexDirection:'row'}}>
      {
        User.map((item)=><Text style={styless.text}>{item.name}</Text>)
      }
    </View>
    </ScrollView>

  </View>  
  );
}



const styless = StyleSheet.create({
  text : {
    color : 'red',
    fontSize : 30,
    color : 'white',
    backgroundColor : 'blue',
    padding : 25,
    width : 200,
    margin : 5
  }
 
})


