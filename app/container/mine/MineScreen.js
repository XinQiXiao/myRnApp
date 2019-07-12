/**
 * create 07/12/19
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, } from 'react-native'

// component
import { BaseSafeView, } from '../../components/base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

class MinePage extends Component{
  static navigationOptions = {
    title: '我的',
  }

  _toTest = () => {
    this.props.navigation.navigate('mineTest')
  }

  render() {
    return (
      <BaseSafeView>
        <View style={styles.container}>
          <Text>Mine screen.</Text> 
          <Button title='To Test' onPress={this._toTest}/>
        </View>
      </BaseSafeView>
    )
  }
}

export default MinePage