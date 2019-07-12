/**
 * create at 06/19/19
 */
import { 
  createStackNavigator, createAppContainer, createSwitchNavigator,
} from 'react-navigation'

// components
import AuthLoadingScreen from '../auth/AuthLoadingPage'
import SignInScreen from '../auth/SignInPage'
import TabStack from './TabBarRouter'

// screens
import { OtherScreen, } from '../home/other'
import { TestScreen, } from '../mine/test'

// style
import { styleNavs } from '../../style'

const AuthStack = createStackNavigator({ 
  signIn: SignInScreen 
}, {
  defaultNavigationOptions: {
    ...styleNavs.navDefaultOptions,
  }
})

const AppMainStack = createStackNavigator({
  tabStack: TabStack,
  other: OtherScreen,
  mineTest: TestScreen,
}, {
  defaultNavigationOptions: {
    ...styleNavs.navDefaultOptions,
  }
})

const RootSwitchNavigator = createSwitchNavigator(
  {
    authLoading: AuthLoadingScreen,
    appMainStack: AppMainStack,
    authStack: AuthStack,
  },
  {
    initialRouteName: 'authLoading',
  }
)

export default createAppContainer(RootSwitchNavigator)