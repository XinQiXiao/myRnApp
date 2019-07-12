/**
 * create at 07/12/19
 */
import React, { Component, createElement, } from 'react'
import { BackHandler, Platform, } from 'react-native'
import _ from 'lodash'

// const 
const EVENT_BACK = 'hardwareBackPress'

export default function enhancedBackHandler(){
  return (oldComponent)=>{
    return class newComponent extends Component{

      componentWillMount(){
        if(Platform.OS === 'android'){
          BackHandler.addEventListener(EVENT_BACK, this._handleBack)
        }
      }

      _handleBack = ()=>{
        console.log('_handleBack EVENT_BACK')
        if(!_.isNil(this.refs.wrapComponent)){
          const { handleHardwareBackPress } = this.refs.wrapComponent
          if(_.isFunction(handleHardwareBackPress))
            return handleHardwareBackPress()
        }
        return false
      }

      componentWillUnmount(){
        if(Platform.OS === 'android'){
          BackHandler.removeEventListener(EVENT_BACK, ()=> null)
        }
      }

      render(){
        return createElement(oldComponent, {...this.props, ref: 'wrapComponent'})
      }
    }
  }
}