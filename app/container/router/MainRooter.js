/**
 * create at 06/19/19
 */
import React, { Component } from 'react'
import { View, Text,} from 'react-native'
import { createStackNavigator, createAppContainer, } from 'react-navigation'

// components
// import TabNavigator from './TabDemo'
import DrawerNavigator from './drawerDemo'

export default createAppContainer(DrawerNavigator)