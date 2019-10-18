import React, { Component } from 'react';
import { 
  Text, 
  View,
  FlatList,
  TouchableOpacity } from 'react-native';

export default class HelloWorldApp extends Component {

  // 生命周期：在组件挂载之前调用一次。返回值将会作为 this.state 的初始值。
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ['fetch']
    }
  }

  // 生命周期：渲染函数（调用该方法，先对状态机变量与属性进行检查。）
  render() {
    return (
      <FlatList
        data={this.state.dataSource} // 只支持普通数组
        renderItem={({item}) => this._createListItem(item)} // 从data中挨个取出数据并渲染到列表中。
        ItemSeparatorComponent={this._separator} // 行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后。
        keyExtractor={this._extraUniqueKey} // 用于为给定的 item 生成一个不重复的 key
      />
    );
  }

  _extraUniqueKey(item, index) {
    return "index" + index + item;
  }
  _separator() {
    return <View style={{height: 0.5, backgroundColor: '#999999'}}/>;
  }
  _createListItem(item) {
    return (
      // 封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低。
      <TouchableOpacity 
        activeOpacity={0.5} 
        onPress={() => this._onItemClick(item)}
        >
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
            backgroundColor: '#fff',
            padding: 10}}
            >
            <Text style={{marginLeft: 6}}>
                {item}
            </Text>
        </View>
      </TouchableOpacity>
    );
  }
  _onItemClick(item) {
    console.log("data" + " = " + item);
    this.props.navigation.navigate('NetworkDetail')
  }
}
