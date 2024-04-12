import React, { useState , Component, useEffect} from "react";

import { View,Text, StyleSheet, StatusBar, Platform} from "react-native";


const App = ()=>{

  const [show, setShow] = useState(false)

  return(
    <View style={style.mainBox}>

     <Text>{Platform.OS}</Text>

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


