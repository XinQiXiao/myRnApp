/**
 * create at 06/25/19
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image, ScrollView, } from 'react-native'
import { 
  createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator,
  createStackNavigator, SafeAreaView,
} from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import DeviceInfo from 'react-native-device-info'

// components
import AuthLoadingScreen from '../auth/AuthLoadingPage'
import SignInScreen from '../auth/SignInPage'

// style
import { styleColors, styleDistances, } from '../../style'

// icons
const HOME_NOR = require('../../sources/images/assets/home_nor.png')
const HOME_SEL = require('../../sources/images/assets/home_sel.png')
const SETTING_NOR = require('../../sources/images/assets/mine_nor.png')
const SETTING_SEL = require('../../sources/images/assets/mine_sel.png')

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'home',
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('other')
  }

  _signOutAsync = async () => {
    try{
      await AsyncStorage.clear()
      this.props.navigation.navigate('authStack')
    }catch(e){
      console.log('_signOutAsync e=>', e)
    }
  }

  render() {
    console.log('current app name=>', DeviceInfo.getApplicationName())
    return (
      <View style={styles.container}>
        <Text>Home screen.</Text>
        <Button title="Show me more of app" onPress={this._showMoreApp}/>
        <Button title="Actually, sign me out." onPress={this._signOutAsync}/>
      </View>
    )
  }
}

class OtherScreen extends Component {

  _testRender = (text)=>{
    return (
      <View style={{height: 20, alignItems: 'center', borderColor: 'yellow', borderWidth: 0.5}}>
        <Text >{text}</Text>
      </View>
    )
  }

  render() {
    console.log('height =>', styleDistances.DEVICES_HEIGHT)
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{height: 200, backgroundColor: 'red'}} />
          <View style={{height: 200, backgroundColor: 'blue'}} />
          <Text>Other screen.</Text>
          <View style={{height: 200, backgroundColor: 'blue'}} />
          <View style={{height: 200, backgroundColor: 'red'}} >
            {this._testRender('1aaa')}
            {this._testRender('2aaa')}
            {this._testRender('3aaa')}
            {this._testRender('4aaa')}
            {this._testRender('5aaa')}
            {this._testRender('6aaa')}
            {this._testRender('7aaa')}
            {this._testRender('8aaa')}
            {this._testRender('9aaa')}
            {this._testRender('10aaa')}
          </View> 
        </ScrollView>
      </SafeAreaView>
    )
  }
}
class SettingsScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings screen.</Text> 
      </View>
    )
  }
}

const AuthStack = createStackNavigator({ signIn: SignInScreen })

const TabStack = createBottomTabNavigator({
  home: HomeScreen,
  settings: SettingsScreen,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'home') {
        iconName = focused ? HOME_SEL : HOME_NOR
      } else if (routeName === 'settings') {
        iconName = focused ? SETTING_SEL : SETTING_NOR
      }
      // You can return any component that you like here!
      return <Image source={iconName}/>
    },
  }),
  tabBarOptions: {
    activeTintColor: styleColors.BLUE_COLOR,
    inactiveTintColor: styleColors.GRAY_COLOR,
  }
})

const AppStack = createStackNavigator({
  tabStack: TabStack,
  other: OtherScreen,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const MySwitchNavigator = createSwitchNavigator(
  {
    authLoading: AuthLoadingScreen,
    appStack: AppStack,
    authStack: AuthStack,
  },
  {
    initialRouteName: 'authLoading',
  }
)

export default MySwitchNavigator