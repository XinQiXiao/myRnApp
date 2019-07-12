/**
 * create at 06/25/19
 */
import React from 'react'
import { 
  createBottomTabNavigator, createStackNavigator,
} from 'react-navigation'

// components 
import { TabBarComponents, } from '../../components/system'
// page
import HomeScreen from '../home/HomeScreen'
import MineScreen from '../mine/MineScreen'

// style
import { styleColors, styleNavs, } from '../../style'

// icons
const HOME_NOR = require('../../sources/images/assets/home_nor.png')
const HOME_SEL = require('../../sources/images/assets/home_sel.png')
const SETTING_NOR = require('../../sources/images/assets/mine_nor.png')
const SETTING_SEL = require('../../sources/images/assets/mine_sel.png')

const { TabBarIcon, } = TabBarComponents

const HomeStack = createStackNavigator({
  home: HomeScreen,
}, {
  defaultNavigationOptions: {
    ...styleNavs.navDefaultOptions,
  }
})
const MineStack = createStackNavigator({
  mine: MineScreen,
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
    screen: MineStack,
    navigationOptions: ({navigation})=>({
      tabBarLabel: '我的',
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

export default TabStack