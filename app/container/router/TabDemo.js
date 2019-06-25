/**
 * create at 06/25/19
 */
import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Button, } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

// style
import { styleColors } from '../../style'

// icons
const HOME_NOR = require('../../sources/images/assets/home_nor.png')
const HOME_SEL = require('../../sources/images/assets/home_sel.png')
const SETTING_NOR = require('../../sources/images/assets/mine_nor.png')
const SETTING_SEL = require('../../sources/images/assets/mine_sel.png')

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('settings')}
        />
      </View>
    )
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('home')}
        />
      </View>
    )
  }
}

class IconWithBadge extends Component {
  render() {
    const { iconName, badgeCount, } = this.props
    return (
      <View style={styles.iconBadgeContainer}>
        <Image source={iconName}/>
        { badgeCount > 0 && (
          <View style={styles.iconCountView}>
            <Text style={styles.iconCountText}>{badgeCount}</Text>
          </View>
        )}
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  home: HomeScreen,
  settings: SettingsScreen,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'home') {
        iconName = focused ? HOME_SEL : HOME_NOR
      } else if (routeName === 'settings') {
        iconName = focused ? SETTING_SEL : SETTING_NOR
      }
      // You can return any component that you like here!
      return <IconWithBadge iconName={iconName} badgeCount={3}/>
    },
  }),
  tabBarOptions: {
    activeTintColor: styleColors.BLUE_COLOR,
    inactiveTintColor: styleColors.GRAY_COLOR,
  },
})

const styles = StyleSheet.create({
  iconBadgeContainer: {
    width: 24, 
    height: 24, 
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconCountView: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconCountText: {
    color: '#fff', 
    fontSize: 10, 
    fontWeight: 'bold'
  }
})

export default TabNavigator