import React, { useState , Component, useEffect} from "react";

import { View,Text, StyleSheet, TouchableHighlight , ScrollView, TouchableOpacity} from "react-native";


const App = ()=>{

  const Skill = [
    {
      id : 1,
      name : "Node js"
    },
    {
      id : 2,
      name : "PHP"
    },
    {
      id : 3,
      name : "JAVA"
    },
    {
      id : 4,
      name : "Python"
    }
  ]




  const [checked, setChecked] = useState(1)


  return(
    <View style={style.mainBox}>

      {
        Skill.map((item)=> <TouchableOpacity key={item.id} onPress={()=>setChecked(item.id)}>
        <View style={{flexDirection: 'row'}}>
          <View style={style.radio}>
            {
              checked == item.id ?  <View style={style.radionBg}></View> : null
            }
          </View>
          <Text style={style.btntext}>{item.name}</Text>
        </View>
        <Text></Text>
      </TouchableOpacity>)
      }

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


