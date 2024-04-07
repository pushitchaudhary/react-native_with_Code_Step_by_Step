import React, { useState } from "react";

import { View,Text, Button, TextInput, StyleSheet , FlatList, ScrollView } from "react-native";

import styles from "./css/styles";


export default function App() {

  const UserData = [
    {
      id : 1,
      name : "pushit",
      age : 23
    },
    {
      id : 2,
      name : "ram",
      age : 19
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    }, {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "om",
      age : 11
    },
    {
      id : 3,
      name : "Hari",
      age : 11
    },

  ]

  // const [name, setName] = useState('')
  // const [password, setPassword] = useState('')
  // const [address, setAddress] = useState('')
  // const [contact, setContact] = useState('')
  // const [email, setEmail] = useState('')
  // const [display, setDisplay] = useState(false)


  return (
  <View style={{marginTop:90}}>
    
    {/* <Text style={styless.inputText}>Enter Name</Text>
    <TextInput style={styless.inputBox} value={name} onChangeText={(text)=>setName(text)}  placeholder="Enter Your Name"/>
    
    <Text style={styless.inputText}>Password</Text>
    <TextInput style={styless.inputBox} value={password} secureTextEntry={true} onChangeText={(text)=>setPassword(text)}  placeholder="Password" />
   

    <Text style={styless.inputText}> Address </Text>
    <TextInput style={styless.inputBox} value={address} onChangeText={(text)=>setAddress(text)} placeholder="Address"/>
    
    <Text style={styless.inputText}>Contact Number</Text>
    <TextInput style={styless.inputBox} value={contact} onChangeText={(text)=>setContact(text)} placeholder="Contact Number" />
    
    <Text style={styless.inputText}>Email</Text>
    <TextInput style={styless.inputBox} value={email} onChangeText={(text)=>setEmail(text)} placeholder="email"/>
   
    <Button title="Print Details" onPress={()=>setDisplay(true)} style={styless.submitBtn}></Button>
    <Button title="Clear field" onPress={()=>{setDisplay(false),setName(''),setAddress(''),setPassword(''),setEmail(''),setContact('') }}></Button>
  
    <Text></Text>
    <Text></Text>

    {
      display ? 
      <View>
        <Text>Name : {name}</Text>
        <Text>Password : {password}</Text>
        <Text>Address : {address}</Text>
        <Text>Contact : {contact}</Text>
        <Text>Email : {email}</Text>
      </View> : null
    } */}

   {/* <FlatList
    data = {UserData}
    renderItem ={({item})=> <Text style={styless.textStyle}>{item.id} {item.name} {item.age}</Text>}
    keyExtractor={item=>item.id}
    /> */}

<ScrollView>


    {
      UserData.map((item)=><Text style={styless.textStyle}>{item.name}</Text>)
    }
  
    </ScrollView>
  </View>  
  );
}

const styless = StyleSheet.create({
  inputBox : {
    fontSize : 20,
    borderColor : 'black',
    borderWidth : 2,
    width : 250,
    borderRadius : 7,
    paddingLeft : 10,
    marginLeft : 10,
    height : 35,
    marginBottom : 20
  },

  inputText : {
    fontSize : 40,
    marginLeft: 10,
    marginBottom : 5
    
  },
  submitBtn : {
    color : 'red',
    fontSize : 20
  }
  ,

  textStyle : {
    fontSize : 20,
    color : 'red',
    backgroundColor : 'yellow',
    margin : 10,
    height : 40
  }
})


