/**
 * create 07/12/19
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import DeviceInfo from 'react-native-device-info'

// component
import { BaseSafeView, } from '../../components/base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

class HomePage extends Component {
  static navigationOptions = {
    title: '首页',
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
      <BaseSafeView >
        <View style={styles.container}>
          <Text>Home screen.</Text>
          <Button title="Show me more of app" onPress={this._showMoreApp}/>
          <Button title="Actually, sign me out." onPress={this._signOutAsync}/>
        </View>
      </BaseSafeView>
    )
  }
}

export default HomePage