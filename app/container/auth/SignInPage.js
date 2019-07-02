/**
 * create at 06/25/19
 */
import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Please sign in',
  }

  _signInAsync = async ()=>{
    try{
      await AsyncStorage.setItem('userToken', 'abc')
      this.props.navigation.navigate('appMainStack')
    }catch(e){
      console.log('_signInAsync e=>', e)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SignIn screen.</Text>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default SignInScreen