import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TouchableHighlight,
} from 'react-native';

// 第二页, 点击跳出返回第一页
class Test extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.headText}>
              第二页: {this.props.name}
            </Text>
          </View>
          <TouchableHighlight
              style={styles.button}
              onPress={()=>this.props.navigator.pop()}>
            <Text style={styles.buttonText}>
              返回上一页
            </Text>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Test;