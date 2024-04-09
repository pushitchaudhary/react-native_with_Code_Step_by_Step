import React, { useState , Component, useEffect} from "react";

import { View,Text, Button, TextInput, StyleSheet, ScrollView, FlatList  } from "react-native";
import Student from "./components/Student";

const App = ()=>{

  const [dispaly, setDisplay] = useState(true)


  return(
    <View style={{marginTop:90}}>
      <Button title="Troggle Compoenent" onPress={()=>setDisplay(!dispaly)}></Button>

      {
        dispaly ?  <Student/> : null
      }
     
    </View>

  )

}

export default App


