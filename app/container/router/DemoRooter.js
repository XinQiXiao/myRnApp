/**
 * create at 06/28/19
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import { createStackNavigator } from 'react-navigation'

const ThemeContext = React.createContext('light')

class DemoComponent extends Component{
  render(){
    return (
      <ThemeContext.Provider value='dark'>
        <ThemeButton />
      </ThemeContext.Provider>
    )
  }
}

class ThemeButton extends Component{
  render(){
    return <ThemeButtonChilden />
  }
}

class ThemeButtonChilden extends Component{
  static contextType = ThemeContext

  render(){
    console.log(`context=>${this.context}`)
    return <Text>childen button</Text>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const DemoStack = createStackNavigator({
  demo: DemoComponent
})

export default DemoStack