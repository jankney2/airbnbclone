import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Trips extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.page}>
                <Text>Trips</Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    page:{
        display:'flex',
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:4, 
 
        borderColor:'red',
        flex:1
    }
})