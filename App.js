import React, { useState , Component, useEffect} from "react";

import { View,Text, StyleSheet, TouchableHighlight } from "react-native";


const App = ()=>{
  return(
    <View style={{marginTop: 80}}>
      <TouchableHighlight>
        <Text style={style.btn}>Button</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[style.btn, style.success]}>Success</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[style.btn, style.primary]}>Primary</Text>
      </TouchableHighlight>
    </View>
  )

}


const style = StyleSheet.create({
  btn : {
    backgroundColor : 'red',
    padding : 12,
    fontSize : 20,
    color : 'white',
    textAlign : 'center',
    margin : 20
  },
  success : {
    backgroundColor : 'green'
  },
  primary : {
    backgroundColor : 'gray'
  }
})



export default App


