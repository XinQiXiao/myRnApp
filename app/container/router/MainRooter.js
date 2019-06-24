/**
 * create at 06/19/19
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button,} from 'react-native'
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, } from 'react-navigation'

class FeedScreen extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Button title="Go AuthNavigator" onPress={()=> {
          this.props.navigation.navigate('Auth')
        }}/>
        <Text>Feed Screen.</Text>
      </View>
    )
  }
}

class FriendListScreen extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>FriendList Screen.</Text>
      </View>
    )
  }
}

class SignInScreen extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>SignIn Screen.</Text>
      </View>
    )
  }
}

class ForgotPasswordScreen extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>Forgot password Screen.</Text>
      </View>
    )
  }
}

const FriendsNavigator = createDrawerNavigator({
  Feed: FeedScreen,
  FriendList: FriendListScreen,
})

const AuthNavigator = createStackNavigator({
  SignIn: SignInScreen,
  ForgotPassword: ForgotPasswordScreen,
})

const AppNavigator = createSwitchNavigator({
  App: FriendsNavigator,
  Auth: AuthNavigator,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default createAppContainer(AppNavigator)