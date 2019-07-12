/**
 * create at 07/12/19
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet, } from 'react-native'

// component
import { BaseSafeView, } from '../../../components/base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default class TestPage extends Component{
  static navigationOptions = {
    title: 'Test',
  }

  render(){
    return (
      <BaseSafeView >
        <View style={styles.container}>
          <Text>Test Page.</Text>
        </View>
      </BaseSafeView>
    )
  }
}