/**
 * create at 06/25/19
 */
import React, { Component } from 'react'
import { View, ActivityIndicator, StatusBar,} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    try{
      const userToken = await AsyncStorage.getItem('userToken')
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? 'appMainStack' : 'authStack')
    }catch(e){
      console.log('_bootstrapAsync e ', e)
    }
    
  }

  // Render any loading content that you like here
  render() {
    console.log('AuthLoadingPage render')
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

export default AuthLoadingScreen