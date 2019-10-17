import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  Button,
  ActivityIndicator } from 'react-native';

const REQUEST_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
// const REQUEST_URL = "http://v.juhe.cn/toutiao/index?key=c76f60c92d392d0a59d7cac0cae97a44";
  
export default class HelloWorldApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataString: "点击按钮加载数据",
      loading: false
    };
    // this.fetchData = this.fetchData.bind(this);
  }

  // 生命周期：一般在这进行网络请求
  componentDidMount() {
    console.log('初始化成功');
    // this.fetchData();
  }

  render() {
    if (this.state.loading) {
      return this.renderLoadingView();
    }
    return (
      <View style={styles.viewStyle}>
        <Button 
          style={styles.buttonStyle}
          onPress={() => this.onPressAction('点击')}
          title="请求数据"
          color="#841584"
        >
        </Button>
        <Text style={styles.textStyle}>
          {this.state.dataString}
        </Text>
      </View>
    );
  }


  // 加载loading
  renderLoadingView() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  // 按钮点击事件
  onPressAction(event) {
    this.fetchData();
  }

  fetchData() {
    console.log('开始请求');
    this.setState({
      loading: true
    })
    fetch(REQUEST_URL).then(response => response.json()).then(resopnseData => {
      this.setState({ // 调用setState更新状态
        dataString: resopnseData.disclaimer,
        loading: false
      })
      console.log(resopnseData);
    })
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  viewStyle: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7FFF00'
  },
  textStyle: {
    paddingTop: 50
  }
});