import React, { Component } from 'react';
import { 
  Text, 
  View,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator } from 'react-native';

// const REQUEST_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
// const REQUEST_URL = "http://v.juhe.cn/toutiao/index?key=c76f60c92d392d0a59d7cac0cae97a44";
const REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class HelloWorldApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      isRefreshing: false
    };
    // this.fetchData = this.fetchData.bind(this);
  }

  // 生命周期：一般在这进行网络请求
  componentDidMount() {
    console.log('初始化成功');
    this.fetchData();
  }

  render() {
    if (this.state.loading) {
      return this.renderLoadingView();
    }
    return (
      <View style={styles.viewStyle}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderMovie}
          style={styles.list}
          keyExtractor={item => item.id}
          onRefresh={() => this._onRefresh()}
          refreshing={this.state.isRefreshing}
        />
      </View>
    );
  }

  // cell
  renderMovie({ item }) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: item.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>
            { item.title }
          </Text>
          <Text style={styles.year}>
            { item.year }
          </Text>
        </View>
      </View>
    )
  }


  // 加载loading
  renderLoadingView() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  // 下拉刷新
  _onRefresh() {
    this.fetchData()
  }

  // 网络请求
  fetchData() {
    console.log('开始请求');
    this.setState({
      loading: true,
      isRefreshing: true
    })
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(resopnseData => {
        this.setState({ // 调用setState更新状态
          data: resopnseData.movies,
          loading: false,
          isRefreshing: false
        })
        console.log(resopnseData);
    })
  }
}

// 样式
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  list: {
    backgroundColor: "#FFFFFF"
  },
  rightContainer: {
    height: 100,
    flex: 1
  },
  thumbnail: {
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 10,
    width: 53,
    height: 80
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    textAlign: "left"
  },
  year: {
    marginLeft: 20,
    marginBottom: 10,
    textAlign: "left"
  }
});