import React, { useState , Component, useEffect} from "react";

import { View,Text, StyleSheet, Button ,ActivityIndicator, TouchableHighlight, TouchableOpacity } from "react-native";


const App = ()=>{

  const [display, setDisplay] = useState(false)

  const runFun = ()=>{
    setDisplay(true)

    setTimeout(()=>{
      setDisplay(false)
    },3000)
  }

  return(
    <View style={style.mainBox}>

      {/* Method 1 */}
      {/* <ActivityIndicator size={'large'} animating={display} color={'red'} /> */}

      {/* Method 2 */}
      {
        display ?  <ActivityIndicator size={'large'} animating={display} color={'green'} /> : null
      }

      <Button title='loader' onPress={()=>runFun()} />

    
    </View>
  )

}

const style = StyleSheet.create({
  mainBox : {
    flex : 1,
    marginTop : 80,
    textAlign : 'center',
    alignItems : 'center',
    justifyContent : 'center'
  },

  text : {
    fontSize : 20,
    marginTop : 30
  }
 
})



export default App


