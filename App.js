import React, { useState , Component} from "react";

import { View,Text, Button, TextInput, StyleSheet, ScrollView, FlatList  } from "react-native";
import Student from "./components/Student";

class App extends Component {
  render(){
    return(
      <View style={{marginTop:80}}>
        <Text>This is app view page text</Text>
        <Student/>
      </View>
    )
  }
}

export default App
