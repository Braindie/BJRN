import React, { Component } from 'react';
import { 
  createStackNavigator, 
  createBottomTabNavigator, 
  createAppContainer } from 'react-navigation'
import Icon from "react-native-vector-icons/Ionicons"

// 自定义组件
import LayoutPage from '../layout/layoutPage'
import LayoutDetailPage from '../layout/layoutDetailPage'

import AnimationPage from '../animation/animationPage'

import NetworkPage from '../network/networkPage'
import NetworkDetailPage from '../network/networkDetailPage'

import FramePage from '../frame/framePage'

import FunctionPage from '../function/functionPage'

// 提供一种在每个新屏幕放置在堆栈顶部的屏幕之间转换的方法。（类似于导航控制器）
const LayoutStack = createStackNavigator({ // 有路由功能
  Layout: {
    screen: LayoutPage, // 组件
    navigationOptions: { // 导航器本身的导航选项，用于配置父导航器
      headerTitle: 'Layout'
    }
  },
  LayoutDetail: LayoutDetailPage
})
const AnimationStack = createStackNavigator({
  Animation: {
    screen: AnimationPage,
    navigationOptions: {
      headerTitle: 'Draw'
    }
  }
})
const NetworkStack = createStackNavigator({
  Network: {
    screen: NetworkPage,
    navigationOptions: {
      headerTitle: 'Data',
      headerBackTitle: null, // 源屏幕 (而不是目标屏幕) 中定义
    }
  },
  NetworkDetail: {
    screen: NetworkDetailPage,
    navigationOptions: {
      headerTitle: 'Data Detail',
    }
  } 
})
// 二级控制器隐藏标签栏
NetworkStack.navigationOptions = ({ navigation }) => {
  return {
      tabBarVisible: navigation.state.index === 0,
  };
};
const FrameStack = createStackNavigator({
  Frame: {
    screen: FramePage,
    navigationOptions: {
      headerTitle: 'Frame'
    }
  }
})
const FunctionStack = createStackNavigator({
  Function: {
    screen: FunctionPage,
    navigationOptions: {
      headerTitle: 'Func'
    }
  }
})

// 页面底部的标签栏，可让您在不同路由之间进行切换。 路由被懒加载 - 它们的屏幕组件直到第一次获取焦点时才被加载。
const BottomTabBar = createBottomTabNavigator(
  {
    LayoutStackTab: {
      screen: LayoutStack,
      navigationOptions: ({navigation}) => ({// 导航器本身的导航选项，用于配置父导航器
        tabBarLabel: 'Layout',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={'ios-home'}
            size={26}
            style={{color: tintColor}}
          />
        )
      })
    },
    AnimationStackTab: {
      screen: AnimationStack,
      navigationOptions: {
        tabBarLabel: 'Draw',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={'ios-happy'}
            size={26}
            style={{color: tintColor}}
          />
        )
      }
    },
    NetworkStackTab: {
      screen: NetworkStack,
      navigationOptions: {
        tabBarLabel: 'Data',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={'ios-git-network'}
            size={26}
            style={{color: tintColor}}
          />
        )
      }
    },
    FrameStackTab: {
      screen: FrameStack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Frame',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={'ios-sunny'}
            size={26}
            style={{color: tintColor}}
          />
        )
      })
    },
    FunctionStackTab: {
      screen: FunctionStack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Func',
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
    initialRouteName: 'LayoutStackTab', // 第一次加载时初始选项卡路由的 routeName。
    order: ['LayoutStackTab','AnimationStackTab','NetworkStackTab','FrameStackTab','FunctionStackTab'], // 定义选项卡顺序的 routeNames 数组。
    tabBarOptions: { // 具有以下属性的对象
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

// App 容器负责管理应用的 state, 并将顶层的 navigator 链接到整个应用环境。
const AppContainner = createAppContainer(BottomTabBar);

export default class App extends Component {
  render() {
    return (
      <AppContainner/>
    );
  }
}
