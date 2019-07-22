import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import Explore from './screens/Explore';
import Inbox from './screens/Inbox'
import Saved from './screens/Saved'
import Trips from './screens/Trips'
import Icon from 'react-native-vector-icons/Ionicons'


const AppNav= createBottomTabNavigator({
  Explore:{
    screen:Explore, 
    navigationOptions: {
      tabBarLabel:'EXPLORE',
      tabBarIcon:({tintColor})=>{
        <Icon name='ios-add' color={'red'} size={24}/>
      }
    }
  }, 
  Saved:{
    screen:Saved,
    navigationOptions: {
      tabBarLabel:'SAVED',
      tabBarIcon:({tintColor})=>{
        <Icon name='comment' color={tintColor} size={24}/>
      }
    }
  }, 
  Inbox: {
    screen:Inbox,
    navigationOptions: {
      tabBarLabel:'INBOX',
      tabBarIcon:({tintColor})=>{
        <Icon name='comment' color={tintColor} size={24}/>
      }
    }
  }, 
  Trips: {
    screen:Trips,
    navigationOptions: {
      tabBarLabel:'TRIPS',
      tabBarIcon:({tintColor})=>{
        <Icon name='comment' color={tintColor} size={24}/>
      }
    }
  }
}, {
  initialRouteName:'Explore', 
  tabBarOptions:{
    activeTintColor:'red', 
    inactiveTintColor:'grey', 
    style:{
      backgroundColor:'white', 
      shadowColor:'black', 
      shadowOffset:{width:5, height:3},
      borderTopWidth:0,
      shadowOpacity:0.5, 
      elevation:5
    }
  }
}); 

export default createAppContainer(AppNav)



