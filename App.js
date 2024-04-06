import React from "react";

import { View,Text, Button } from "react-native";
import CompanyData from "./components/CompanyData";

export default function App() {
   let  data = 100
  const fruit = (val)=>{
    data = 20
    console.warn(data);
  }

  return (

    <View style={{marginTop:90}}>
      <Text>{data}</Text>
      <Student1/>
      <Text></Text>
      <Student2/>
      <Text></Text>
      <Student3/>
      <Text></Text>
      <CompanyData/>
      <Button title='Click Me !! Parameter' onPress={()=>fruit('this is pushit chaudhary')} color={'red'}></Button> 
      <Button title='Click Me !! without parameter' onPress={fruit} color={'red'}></Button> 
    

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