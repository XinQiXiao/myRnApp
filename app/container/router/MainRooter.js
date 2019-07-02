/**
 * create at 06/19/19
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, } from 'react-native'
import { 
  createStackNavigator, createAppContainer, createSwitchNavigator,
  SafeAreaView,
} from 'react-navigation'

// components
import AuthLoadingScreen from '../auth/AuthLoadingPage'
import SignInScreen from '../auth/SignInPage'
import TabStack from './TabBarRouter'

// style
import { styleNavs } from '../../style'

class OtherScreen extends Component {
  static navigationOptions = {
    title: '其他',
  }

  _testRender = (text)=>{
    return (
      <View style={{height: 20, alignItems: 'center', borderColor: 'yellow', borderWidth: 0.5}}>
        <Text >{text}</Text>
      </View>
    )
  }

  render() {
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

const AuthStack = createStackNavigator({ 
  signIn: SignInScreen 
}, {
  defaultNavigationOptions: {
    ...styleNavs.navDefaultOptions,
  }
})

const AppMainStack = createStackNavigator({
  tabStack: TabStack,
  other: OtherScreen,
}, {
  defaultNavigationOptions: {
    ...styleNavs.navDefaultOptions,
  }
})

const RootSwitchNavigator = createSwitchNavigator(
  {
    authLoading: AuthLoadingScreen,
    appMainStack: AppMainStack,
    authStack: AuthStack,
  },
  {
    initialRouteName: 'authLoading',
  }
)

export default createAppContainer(RootSwitchNavigator)