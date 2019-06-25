/**
 * create at 06/25/19
 */
import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Button, } from 'react-native'
import { createBottomTabNavigator, createDrawerNavigator, } from 'react-navigation'

// icons
const HOME_ICON = require('../../sources/images/assets/home_sel.png')
const NOTIFICATION_ICON = require('../../sources/images/assets/mine_nor.png')

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={HOME_ICON}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('notifications')}
        title="Go to notifications"
      />
    )
  }
}

class MyNotificationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={NOTIFICATION_ICON}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  home: {
    screen: HomeScreen,
  },
  notifications: {
    screen: MyNotificationsScreen,
  },
})

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
})

export default MyDrawerNavigator