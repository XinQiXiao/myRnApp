/**
 * create at 07/02/19
 */
import React from 'react'
import { Image, StyleSheet, } from 'react-native'

// const 
const BACK_ICON = require('../../sources/images/common/back_white.png')

const NavLeftIcon = ({tintColor})=>(
  <Image source={BACK_ICON} style={[{tintColor}, styles.image]}/>
)

const styles = StyleSheet.create({
  image: {
    width: 10, 
    height: 18,
  }
})

export {
  NavLeftIcon,
}