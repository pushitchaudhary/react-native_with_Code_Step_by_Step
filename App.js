import React, { useState , Component} from "react";

import { View,Text, Button, TextInput, StyleSheet, ScrollView, FlatList  } from "react-native";
import Student from "./components/Student";

class App extends Component {

  constructor(){
    super()
    this.state={
      name : "pushit ",
      age : 23
    }
  }

  changeText(value){
    this.setState({name:value})
  }

  render(){
    return(
      <View style={{marginTop:80}}>
        <Text>State Name: {this.state.name}</Text>
        <TextInput onChangeText={(text)=>this.changeText(text)}  placeholder="Enter Your Name" style={{borderWidth:3, padding:5, height:40,fontSize:20}}></TextInput>
        <Student name={this.state.name}/>
      </View>
    )
  }
}

export default App
