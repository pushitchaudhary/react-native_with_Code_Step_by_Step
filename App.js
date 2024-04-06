import React from "react";

import { View,Text, Button } from "react-native";
import CompanyData from "./components/CompanyData";

export default function App() {
      let name = 'ram'
  return (

    <View style={{marginTop:90}}>
      <Text>{name}</Text>
      <Button title='Click Me'></Button>
      <Student1/>
      <Text></Text>
      <Student2/>
      <Text></Text>
      <Student3/>
      <Text></Text>
      <CompanyData/>

    </View>
  );
}

const Student1 = ()=>{
  return (
    <View>
      <Text>Name : Pushit Chaudhary</Text>
      <Text>Address : Lahan</Text>
      <Text>Education: Bsc Hons Computing</Text>
    </View>
  )
}



const Student2 = ()=>{
  return (
    <View>
      <Text>Name : Anish</Text>
      <Text>Address : Damauli</Text>
    </View>
  )
}

const Student3 = ()=>{
  return(
    <View>
      <Text>Name : Yubraj</Text>
      <Text>Address : Pokhara</Text>
    </View>
  )
}