/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
   TouchableHighlight,
    Alert,
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

        <Text>
        Hello,react-native,"this is the first rn demo"
        </Text>

        <TouchableHighlight onPress={
            ()=> {
                Alert.alert(
                    `你点击了按钮`,
                    'Hello World！',
                    [
                        {text: '以后再说', onPress: () => console.log('Ask me later pressed')},
                        {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        {text: '确定', onPress: () => console.log('OK Pressed')},
                    ]
                )
            }
        }>
            <Text>Button</Text>
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
