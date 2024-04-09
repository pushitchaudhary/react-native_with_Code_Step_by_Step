import React, { useState , Component, useEffect} from "react";

import { View,Text, Button, TextInput, StyleSheet, ScrollView, FlatList  } from "react-native";
import Student from "./components/Student";

const App = ()=>{

  const [num, setNum] = useState(0)
  const [count, setCount] = useState(100)

  useEffect(()=>{
    console.warn("Hook Called")
  },[num])

  return(
    <View style={{marginTop:90}}>
      <Text>Number: {num}</Text>
      <Text>Count: {count}</Text>
      <Button title="click me" onPress={()=>setNum(num+1)}></Button>
      <Button title="count +100" onPress={()=>setCount(count+1)}></Button>
      <Student count={count}/>
    </View>
  )
}

export default App


