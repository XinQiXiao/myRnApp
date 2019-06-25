/**
 * create at 06/19/19
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button,} from 'react-native'
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, } from 'react-navigation'

// components
import TabNavigator from './TabDemo'

class FeedScreen extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Button title="Go AuthNavigator" onPress={()=> {
          this.props.navigation.navigate('Auth')
        }}/>
        <Text>Feed Screen.</Text>
        <AnimateComponent style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </AnimateComponent >
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



export default createAppContainer(TabNavigator)