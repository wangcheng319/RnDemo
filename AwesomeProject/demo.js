/**
 * Created by wangc on 2016/11/11.
 */

import React, { Component } from 'react';
import { AppRegistry, Text,
    StyleSheet,
    Image,
    View,
    TextInput,
    TouchableOpacity,
    Navigator,
} from 'react-native';

var _navigator;
var Login = require('./login.js');
var Test = require('./test.js');
var Flex = require('./flextest.js');

var AwesomeProject = React.createClass({

    getInitialState: function(){
        return {};
    },

    configureScenceAndroid: function(){
        return Navigator.SceneConfigs.FadeAndroid;
    },


    renderSceneAndroid: function(route, navigator){
        _navigator = navigator;
        if(route.id === 'main'){
            return (
                <View>
                    <TouchableOpacity onPress={() => _navigator.push({title:'Flex',id:'flex'})} style={ styles.button }>
                        <Text>布局</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _navigator.push({title:'ViewPager',id:'viewpager'})} style={ styles.button }>
                        <Text>ViewPager</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _navigator.push({title:'Test',id:'test'})} style={ styles.button }>
                        <Text>Test</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _navigator.push({title:'Login',id:'login'})} style={ styles.button }>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        if(route.id === 'flex'){
            return (
                <Flex navigator={navigator} route={route}/>
            );
        }
        if(route.id === 'viewpager'){
            return (
                <ViewPager navigator={navigator} route={route}/>
            );
        }
        if(route.id === 'test'){
            return (
                <Test navigator={navigator} route={route}/>
            );
        }
        if(route.id === 'login'){
            return (
                <Login navigator={navigator} route={route}/>
            );
        }


    },
    render(){
        var renderScene = this.renderSceneAndroid;
        var configureScence = this.configureScenceAndroid;
        return (
            <Navigator
                debugOverlay={false}
                initialRoute={{ title: 'Main', id:'main'}}
                configureScence={{ configureScence }}
                renderScene={renderScene}
            />
        );
    }
});

var styles = StyleSheet.create({
    button:{
        height:56,
        margin:10,
        backgroundColor:'#cad6c5',
        justifyContent:'center',
        alignItems:'center',
    },
});

module.exports = AwesomeProject