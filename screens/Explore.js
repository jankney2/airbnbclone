import React, { Component } from 'react';

import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';

export default class Explore extends Component {
    state = {  }
    render() {
        return (

            <SafeAreaView style={{flex:1}}>

            <View style={styles.page}>
            <Icon name='ios-search' size={20} />
            <TextInput placeholder="search-y Boi" placeholderTextColor="grey" style={{flex:1,fontWeight:'700',  
            }}/>
            </View>
            </SafeAreaView>
        );
    }
}

const styles= StyleSheet.create({
    page:{

        height:80,
        borderBottomWidth:1,
        borderBottomColor:'#dddddd', 
        backgroundColor:'white', 
        flexDirection:'row', 
        padding:10, 
        marginHorizontal:20, 
        shadowOffset:{width:0, height:0}, 
        shadowColor:'black', 
        shadowOpacity:0.2

    }
})