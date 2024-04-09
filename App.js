import React, { useState , Component, useEffect} from "react";

import { View,Text, Button, TextInput, StyleSheet, ScrollView, FlatList  } from "react-native";


const App = ()=>{
  return(
    <View style={style.main}>
      <View style={style.box1}>
        <View style={style.col1}></View>
        <View style={style.col2}></View>
        <View style={style.col3}></View>
      </View>
      <View style={style.box2}></View>
      <View style={style.box3}></View>
    </View>
  )

}

const style = StyleSheet.create({
  main : {
    backgroundColor : 'red',
    flex : 1
  },
  box1 : {
    flex : 1,
    backgroundColor : 'yellow',
    flexDirection : 'row'
  },
  box2 : {
    backgroundColor : 'green',
    flex : 1,
  },
  box3 : {
    backgroundColor : 'brown',
    flex : 1
  },

  col1 : {
    backgroundColor : 'red',
    flex : 1
  },
  col2 : {
    backgroundColor : 'blue',
    flex : 1
  },
  col3 : {
    backgroundColor : 'white',
    flex : 1
  }
})


export default App


