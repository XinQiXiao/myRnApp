/**
 * create at 07/12/19
 */
import React, { Component } from 'react'
import { StyleSheet, } from 'react-native'
import { SafeAreaView } from 'react-navigation'

class BaseSafeView extends Component{
  render(){
    const {  style, children, forceInset, } = this.props
    return (
      <SafeAreaView style={[styles.flexView, style]}
        forceInset={[{horizontal: 'never'}, forceInset]}
      >
        {children}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  flexView: {
    flex: 1
  }
})

export default BaseSafeView

