/**
 * create at 06/19/19
 */
import React, { Component } from 'react'
import { View, Text, Button, Image, } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, } from 'react-navigation'

class HomeScreen extends Component{

  static navigationOptions = {
    title: 'Home',
  }

  componentDidMount(){
    // console.log(`HomeScreen did mount`)
  }

  componentWillUnmount(){
    // console.log(`HomeScreen will unMount`)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title="To Details." onPress={()=> 
          this.props.navigation.navigate('details', {
            itemId: 86,
            otherParam: 'anything you want here.'
          })
        }/>
      </View>
    )
  }
}

class DetailsScreen extends Component {

  static navigationOptions = ({ navigation, navigationOptions, }) => {

    const { params } = navigation.state

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    }
  }

  componentDidMount(){
    // console.log(`DetailsScreen did mount`)
  }

  componentWillUnmount(){
    // console.log(`DetailsScreen will unMount`)
  }

  render() {
    const { params } = this.props.navigation.state
    if(typeof params !== 'undefined' && typeof params !== 'null'){
      // console.log('Details params=>', params)
    }
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
        <Button title="Go Details again." onPress={()=> this.props.navigation.push('details')}/>
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
        />
      </View>
    )
  }
}

class SettingScreen extends Component{

  static navigationOptions = {
    title: 'Setting',
  }

  componentDidMount(){
    // console.log(`SettingScreen did mount`)
  }

  componentWillUnmount(){
    // console.log(`SettingScreen will unMount`)
  }

  render(){
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Setting Screen</Text>
        <Button title="Go profile." onPress={()=> this.props.navigation.push('profile')}/>
      </View>
    )
  }
}

class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('../../sources/images/demo/icon.png')}
        style={{ width: 30, height: 30 }}
      />
    )
  }
}

class ProfileScreen extends Component{

  // static navigationOptions = {
  //   // title: 'Profile',
  //   headerTitle: 'aa',
  // }
  static navigationOptions = ({navigation})=>{
    // headerTitle instead of title
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="blue"
        />
      ),
    }
  }

  state = {
    count: 0,
  }

  componentDidMount(){
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  componentWillUnmount(){
    // console.log(`ProfileScreen will unMount`)
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render(){
    const { count } = this.state
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
        <Text>{`count: ${count}`}</Text>
        <LogoTitle />
        <Button title="Go Details." onPress={()=> this.props.navigation.push('details')}/>
      </View>
    )
  }
}

const HomeStack = createStackNavigator({
  home: HomeScreen,
  details: DetailsScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  navigationOptions: {
    tabBarLabel: 'Home!',
  },
})

const SettingStack = createStackNavigator({
  settings: SettingScreen,
  profile: ProfileScreen
})

const TabNavigator = createBottomTabNavigator({
  homeStack: HomeStack,
  settingStack: SettingStack
})

// const AppNavigator = createStackNavigator({
//   home: {
//     screen: HomeScreen
//   },
//   details: {
//     screen: DetailsScreen
//   }
// }, {
//   initialRouteName: 'home'
// })

export default createAppContainer(TabNavigator)