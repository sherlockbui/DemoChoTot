/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MarketScreen from './Screens/MarketScreen';
import ChatScreen from './Screens/ChatScreen';
import NotificationScreen from './Screens/NotificationScreen';
import MoreScreen from './Screens/MoreScreen';
import LoginScreen from './Screens/LoginScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import LoadingScreen from './Screens/LoadingScreen';
import SplashScreen from 'react-native-splash-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemDetail from './components/ItemDetail';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
  );
};
const BottomTabNavigator = createBottomTabNavigator(
  {
'Đi Chợ': MarketScreen,
    Chat: ChatScreen,
    'Thông Báo': NotificationScreen,
    Thêm: MoreScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Đi Chợ') {
          iconName = 'ios-home';
        } else if (routeName === 'Chat') {
          iconName = 'ios-chatboxes';
        } else if (routeName === 'Thông Báo') {
          iconName = 'ios-notifications';
        } else {
          iconName = 'ios-settings';
        }

        return <IconComponent name={iconName} size={24} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      style: {
        paddingVertical: 5,
        height: 56,
      },
    },
  },
);
const AppStackNavigation = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  LoadingScreen: {
    screen: LoadingScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  HomeScreen: {
    screen: BottomTabNavigator,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ItemDetail: {
    screen: ItemDetail,
    navigationOptions: () => ({
      headerBackTitle: null,
      headerTransparent: true,
    }),
  },
});
const AppNavigator = createAppContainer(AppStackNavigation);
export default App;
