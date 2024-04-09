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
                <Text>Student count : {this.props.count}</Text>
            </View>
        )
    }
}

export default Student;