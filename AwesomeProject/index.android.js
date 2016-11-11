/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import { AppRegistry, Text,
    StyleSheet,
    Image,
    View,
    TextInput,
    TouchableHighlight,
    Navigator,
    } from 'react-native';


var AwesomeProject = require('./demo.js');

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);