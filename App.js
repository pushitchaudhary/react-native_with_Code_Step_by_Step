import React, { useState , Component, useEffect} from "react";

import { View,Text, StyleSheet, TouchableHighlight , ScrollView, TouchableOpacity} from "react-native";


const App = ()=>{

  const [checked, setChecked] = useState(1)


  return(
    <View style={style.mainBox}>
        <TouchableOpacity onPress={()=>setChecked(1)}>
          <View style={{flexDirection: 'row'}}>
            <View style={style.radio}>
              {
                checked == 1 ?  <View style={style.radionBg}></View> : null
              }
            </View>
            <Text style={style.btntext}>Option 1</Text>
          </View>
        </TouchableOpacity>

        <Text></Text>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity onPress={()=>setChecked(2)}>
          <View style={{flexDirection: 'row'}}>
            <View style={style.radio}>
              {
                checked == 2 ?  <View style={style.radionBg}></View> : null
              }
             
            </View>
            <Text style={style.btntext}>Option 2</Text>
          </View>
        </TouchableOpacity>

       
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
  btntext : {
    fontSize : 25,
    margin : 5
  },
  radio : {
    height : 40,
    width : 40,
    borderWidth : 2,
    borderRadius : 20
  },
  radionBg : {
    height : 26,
    backgroundColor : 'black',
    width : 26,
    borderRadius : 12,
    margin : 5
  }
})



export default App


