import React, { Component } from 'react';
import { 
  Text, 
  View,
  FlatList,
  TouchableOpacity } from 'react-native';
import LayoutDetailPage from './layoutDetailPage'
// import { createStackNavigator, createAppContainer } from 'react-navigation'

export default class HelloWorldApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: ['1', '2', '3']
    }
  }

  render() {
    return (
      <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => this._createListItem(item)}
        ItemSeparatorComponent={this._separator}
        keyExtractor={this._extraUniqueKey}
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
      <TouchableOpacity activeOpacity={0.5} onPress={() => this._onItemClick(item)}>
          <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
              backgroundColor: '#fff',
              padding: 10
          }}>
              <Text style={{marginLeft: 6}}>
                  {item}
              </Text>
          </View>
      </TouchableOpacity>
    );
  }

  _onItemClick(item) {
    console.log("data" + " = " + item);
    this.props.navigation.navigate('Detail')
  }
}