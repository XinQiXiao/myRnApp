/**
 * create at 06/25/19
 */
import React, { Component } from 'react'
import { Text, View, Button, Image, StyleSheet, } from 'react-native'
import { 
  createBottomTabNavigator, createStackNavigator,
} from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import DeviceInfo from 'react-native-device-info'

// components 
import { TabBarComponents, } from '../../components/system'

// style
import { styleColors, styleNavs, } from '../../style'

// icons
const HOME_NOR = require('../../sources/images/assets/home_nor.png')
const HOME_SEL = require('../../sources/images/assets/home_sel.png')
const SETTING_NOR = require('../../sources/images/assets/mine_nor.png')
const SETTING_SEL = require('../../sources/images/assets/mine_sel.png')

const { TabBarIcon, } = TabBarComponents

class HomeScreen extends Component {
  static navigationOptions = {
    title: '首页',
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('other')
  }

  _signOutAsync = async () => {
    try{
      await AsyncStorage.clear()
      this.props.navigation.navigate('authStack')
    }catch(e){
      console.log('_signOutAsync e=>', e)
    }
  }

  render() {
    console.log('current app name=>', DeviceInfo.getApplicationName())
    return (
      <View style={styles.container}>
        <Text>Home screen.</Text>
        <Button title="Show me more of app" onPress={this._showMoreApp}/>
        <Button title="Actually, sign me out." onPress={this._signOutAsync}/>
      </View>
    )
  }
}


class SettingsScreen extends Component {
  static navigationOptions = {
    title: '设置',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings screen.</Text> 
      </View>
    )
  }
}

const HomeStack = createStackNavigator({
  home: HomeScreen,
}, {
  defaultNavigationOptions: {
    ...styleNavs.navDefaultOptions,
  }
})
const SettingStack = createStackNavigator({
  settings: SettingsScreen,
}, {
  defaultNavigationOptions: {
    ...styleNavs.navDefaultOptions,
  }
})

/* navigationOptions 中 header 隐藏 
 * 参考 https://reactnavigation.org/docs/zh-Hans/navigation-options-resolution.html#堆栈包含一个选项卡导航器-并且您想要在堆栈标题栏上设置标题
 */
const TabStack = createBottomTabNavigator({
  homeTab: {
    screen: HomeStack,
    navigationOptions: ({navigation})=>({
      tabBarLabel: '首页',
			labelStyle: {
				fontSize: 10,
      },
      tabBarIcon: ({focused, tintColor})=>(
				<TabBarIcon 
					tintColor={tintColor} focused={focused} 
					norImg={HOME_NOR} selImg={HOME_SEL}
				/>
			)
    })
  },
  settingTab: {
    screen: SettingStack,
    navigationOptions: ({navigation})=>({
      tabBarLabel: '设置',
			labelStyle: {
				fontSize: 10,
      },
      tabBarIcon: ({focused, tintColor})=>(
				<TabBarIcon 
					tintColor={tintColor} focused={focused} 
          norImg={SETTING_NOR} selImg={SETTING_SEL}
          badgeCount={1}
				/>
			)
    })
  },
}, {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
		activeTintColor: styleColors.BLUE_COLOR,
		inactiveTintColor: '#666',
		showIcon: true,
		style: {
			backgroundColor: '#f5f5f7'
		}
	}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default TabStack