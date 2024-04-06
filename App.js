import React, { useState } from "react";

import { View,Text, Button, TextInput, StyleSheet  } from "react-native";

import styles from "./css/styles";


export default function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')


  
  return (
  <View style={{marginTop:90}}>
    <Text>Name: {name}</Text>
    <Text>Password: {password} </Text>
    <Text>Address: {address}</Text>
    <Text>Contact Number: {contact} </Text>
    <Text>Email: {email}</Text>

    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text style={styless.inputText}>Enter Name</Text>
    <TextInput style={styless.inputBox} value={name} onChangeText={(text)=>setName(text)}  placeholder="Enter Your Name"/>
    <Text style={styless.inputText}>Password</Text>
    <TextInput style={styless.inputBox} value={password} secureTextEntry={true} onChangeText={(text)=>setPassword(text)}  placeholder="Password" />
    <Text style={styless.inputText}> Address </Text>
    <TextInput style={styless.inputBox} value={address} onChangeText={(text)=>setAddress(text)} placeholder="Address"/>
    <Text style={styless.inputText}>Contact Number</Text>
    <TextInput style={styless.inputBox} value={contact} onChangeText={(text)=>setContact(text)} placeholder="Contact Number" />
    <Text style={styless.inputText}>Email</Text>
    <TextInput style={styless.inputBox} value={email} onChangeText={(text)=>setEmail(text)} placeholder="email"/>
    <Button title="Submit" style={styless.submitBtn}></Button>
    <Button title="Clear field" onPress={()=>{setName(''),setAddress(''),setPassword(''),setEmail(''),setContact('') }}></Button>
  
  
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
    fontSize : 20,
    marginLeft: 10,
    marginBottom : 5
    
  },
  submitBtn : {
    color : 'red',
    fontSize : 20
  }
})


