import React, { useState , Component, useEffect} from "react";

import { View,Text, StyleSheet, StatusBar, Platform, } from "react-native";

import {WebView} from 'react-native-webview'


const App = ()=>{

  const [show, setShow] = useState(false)

  return(


      <WebView style={{marginTop: 60}} source={{uri:"https://www.youtube.com/watch?v=4vVf18LXlOo&list=PL8p2I9GklV468O2wk-n8Q1KmtMhnHHj4C&index=37"}} />
 
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

  showModal : {
    flex : 1,
    justifyContent : 'flex-end',
    marginBottom : 20,
  },
  modalView :{
    justifyContent : 'center',
    alignItems : 'center',
    textAlign : 'center',
    flex : 1,
  }, 
  modalViewText : {
    backgroundColor : 'yellow',
    padding : 60,
    justifyContent : 'center',
    textAlign : 'center'
  }
 
})



export default App


