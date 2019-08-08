import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { 
  createStackNavigator, 
  createBottomTabNavigator, 
  createAppContainer } from 'react-navigation'
import Icon from "react-native-vector-icons/Ionicons"
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Layout from '../layout/layoutPage'
import Animation from '../animation/animationPage'
import Newwork from '../network/networkPage'


// const StackNavigator = createStackNavigator(
//   {
//     Layout,
//     Animation,
//     Newwork,
//   },
//   {
//     initialRouteName: '布局',
//     defaultNavigationOptions: {
//       headerBackTitle: null,
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//       header: null
//     }
//   }
// )

const LayoutStack = createStackNavigator({Layout})
const AnimationStack = createStackNavigator({Animation})
const NetworkStack = createStackNavigator({Newwork})

const BottomTabNavigator = createBottomTabNavigator(
  {
    LayoutStack: {
      screen: LayoutStack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '布局',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={'ios-home'}
            size={26}
            style={{color: tintColor}}
          />
        )
      })
    },
    AnimationStack: {
      screen: AnimationStack,
      navigationOptions: {
        tabBarLabel: '动画',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={'ios-happy'}
            size={26}
            style={{color: tintColor}}
          />
        )
      }
    },
    NetworkStack: {
      screen: NetworkStack,
      navigationOptions: {
        tabBarLabel: '网络',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={'ios-git-network'}
            size={26}
            style={{color: tintColor}}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'LayoutStack',
    order: ['LayoutStack','AnimationStack','NetworkStack'],
    tabBarOptions: {
      activeTintColor: 'red', //活动选项卡的标签和图标颜色
      activeBackgroundColor: 'white', //活动选项卡的背景色
      inactiveTintColor: 'black', //"非活动" 选项卡的标签和图标颜色
      inactiveBackgroundColor: 'white', //非活动选项卡的背景色
      showIcon: true,
      style: {
        backgroundColor: 'white',
        height: 49
      },
    },
  }
)
// const AppContainner = createAppContainer(StackNavigator); //顶部导航
const AppContainner = createAppContainer(BottomTabNavigator);

export default class App extends Component {

  render() {
    return (
      <AppContainner/>
    );
  }
}
