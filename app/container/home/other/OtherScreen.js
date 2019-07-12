/**
 * create at 07/12/19
 */
import React, { Component } from 'react'
import { View, Text, ScrollView, } from 'react-native'

// component
import { BaseSafeView, } from '../../../components/base'

export default class OtherScreen extends Component {
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
      <BaseSafeView >
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
      </BaseSafeView>
    )
  }
}