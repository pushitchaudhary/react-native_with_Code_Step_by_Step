import React, { useState } from "react";

import { View,Text, Button } from "react-native";
import CompanyData from "./components/CompanyData";

export default function App() {
  const [name , setName] = useState('Pushit')

  const carName = (value)=>{
    setName(value)
  }

  return (

    <View style={{marginTop:90}}>
     <Text>{name}</Text>

    <Button title="click me" onPress={()=>carName('k xha')}></Button>
  

  <UserData name="pushit" age="23"/>
    </View> 
    
  );
}



const UserData = (props)=>{

  return (
    <View>
      <Text>Name :{props.name} </Text>
      <Text>Age : {props.age}</Text>
    </View>
  )
}