import React from "react";

import { View,Text, Button } from "react-native";

export default function App() {
  let name = 'ram'
  return (

    <View style={{marginTop:90}}>
      <Text>{name}</Text>
      <Button title='Click Me'></Button>
    </View>
  );
}


