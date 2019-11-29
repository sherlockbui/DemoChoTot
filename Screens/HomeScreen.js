
import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MarketScreen from './MarketScreen';
import ChatScreen from './ChatScreen';
import NotificationScreen from './NotificationScreen';
import MoreScreen from './MoreScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const TabNavigation = createBottomTabNavigator({
    "Đi Chợ": MarketScreen,
    "Chat": ChatScreen,
    "Thông Báo": NotificationScreen,
    "Thêm":MoreScreen
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Đi Chợ') {
          iconName = `ios-home`;
          
          
        } else if (routeName === 'Chat') {
          iconName = `ios-chatboxes`;
        }
        else if (routeName === 'Thông Báo') {
          iconName = `ios-notifications`;
        }else{
          iconName = `ios-settings`;
        }

        return <IconComponent name={iconName} size={24} color={tintColor}/>;
        
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
      labelStyle:{
          fontSize:12,
          fontWeight:'bold'
      },
      style:{
          paddingVertical:5,
          height: 56
      }
    },
  })
export default createAppContainer(TabNavigation);
