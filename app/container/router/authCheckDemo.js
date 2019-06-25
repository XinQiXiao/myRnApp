/**
 * create at 06/25/19
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, } from 'react-native'
import { 
  createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'

// components
import AuthLoadingScreen from '../auth/AuthLoadingPage'
import SignInScreen from '../auth/SignInPage'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
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

  render() {
    return (
      <View style={styles.container}>
        <Text>Other screen.</Text>
      </View>
    )
  }
}

const AppStack = createStackNavigator({ home: HomeScreen, other: OtherScreen })
const AuthStack = createStackNavigator({ signIn: SignInScreen })

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