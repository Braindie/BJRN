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
import LayoutDetailPage from '../layout/layoutDetailPage'
import Animation from '../animation/animationPage'
import Network from '../network/networkPage'
import Frame from '../frame/framePage'
import FunctionPage from '../function/functionPage'

const LayoutStack = createStackNavigator({
  Layout: {
    screen: Layout,
    navigationOptions: {
      headerTitle: '布局'
    }
  },
  Detail: LayoutDetailPage
})
const AnimationStack = createStackNavigator({
  Animation: {
    screen: Animation,
    navigationOptions: {
      headerTitle: '动画'
    }
  }
})
const NetworkStack = createStackNavigator({
  Network: {
    screen: Network,
    navigationOptions: {
      headerTitle: '网络'
    }
  }
})
const FrameStack = createStackNavigator({
  Frame: {
    screen: Frame,
    navigationOptions: {
      headerTitle: '架构'
    }
  }
})
const FunctionStack = createStackNavigator({
  FunctionPage: {
    screen: FunctionPage,
    navigationOptions: {
      headerTitle: '功能'
    }
  }
})

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
    },
    FrameStack: {
      screen: FrameStack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '架构',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={'ios-sunny'}
            size={26}
            style={{color: tintColor}}
          />
        )
      })
    },
    FunctionStack: {
      screen: FunctionStack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '功能',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={'ios-funnel'}
            size={26}
            style={{color: tintColor}}
          />
        )
      })
    },
  },
  {
    initialRouteName: 'LayoutStack',
    order: ['LayoutStack','AnimationStack','NetworkStack','FrameStack','FunctionStack'],
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

const AppContainner = createAppContainer(BottomTabNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainner/>
    );
  }
}
