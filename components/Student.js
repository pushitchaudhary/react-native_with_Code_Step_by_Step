import React, { Component } from "react";
import {View,Text, Button} from 'react-native'

class Student extends Component{
    car = ()=>{
        console.warn('this is car')
    }
    humman = ()=>{
        console.warn("this is human")
    }
    render(){
        return(
            <View>
                <Text>This is student class componnet</Text>
                <Button title="Press Me" onPress={this.car}/>
            </View>
        )
    }
}

export default Student;