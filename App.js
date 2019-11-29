
import React,{useEffect} from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import LoginScreen from './Screens/LoginScreen';
import {SafeAreaView, StatusBar } from 'react-native'
import HomeScreen from './Screens/HomeScreen';
import LoadingScreen from './Screens/LoadingScreen';
import SplashScreen from 'react-native-splash-screen'



const App =() => {
  useEffect(()=>{
    SplashScreen.hide();
  },[]);
  return(

    <SafeAreaView style={{flex:1}}>
      <StatusBar hidden={true}/>
        <AppNavigator/> 
    </SafeAreaView>
      
  )  
};
const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  LoadingScreen: LoadingScreen,
  HomeScreen: HomeScreen
})
const AppNavigator = createAppContainer(AppSwitchNavigator)
export default App;
