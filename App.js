import React, { useState } from "react";

import { View,Text, Button  } from "react-native";

import styles from "./css/styles";


export default function App() {

  return (
  <View style={{marginTop:90}}>
    <Text style={styles.textBox}>My Name Is Pushit</Text>
    <Text style={styles.location}>I am from Lahan</Text>
  </View>  
  );
}


