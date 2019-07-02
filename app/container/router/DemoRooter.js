/**
 * create at 06/28/19
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Button, Platform,} from 'react-native'
import { createStackNavigator, SafeAreaView, } from 'react-navigation'

// const 
const isAndroid = Platform.OS === 'android'

class Screen1 extends Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content')
      isAndroid && StatusBar.setBackgroundColor('#6a51ae')
    })
  }

  componentWillUnmount() {
    this._navListener.remove()
  }

  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <Text style={[styles.paragraph, { color: '#fff' }]}>
          Light Screen
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen2')}
          color={isAndroid ? "blue" : "#fff"}
        />
      </SafeAreaView>
    )
  }
}

class Screen2 extends Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content')
      isAndroid && StatusBar.setBackgroundColor('#ecf0f1')
    })
  }

  componentWillUnmount() {
    this._navListener.remove()
  }

  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        {/* <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        /> */}
        <Text style={styles.paragraph}>
          Dark Screen
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen1')}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {

  }
})

export default createStackNavigator({
  Screen1: {
    screen: Screen1,
  },
  Screen2: {
    screen: Screen2,
  },
}, {
  headerMode: 'none',
})