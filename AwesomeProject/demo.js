/**
 * Created by wangc on 2016/11/11.
 */
/**
 * Sample React Native App
 * https://github.com/hanks-zyh
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
                    <TouchableOpacity onPress={ () => _navigator.push({title:'Http',id:'http'}) }  style={ styles.button }>
                        <Text>NetWork</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _navigator.push({title:'Shop',id:'shop'})} style={ styles.button }>
                        <Text>SHOP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _navigator.push({title:'ViewPager',id:'viewpager'})} style={ styles.button }>
                        <Text>ViewPager</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _navigator.push({title:'UserInfoView',id:'userinfo'})} style={ styles.button }>
                        <Text>Userinfo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _navigator.push({title:'Login',id:'login'})} style={ styles.button }>
                        <Text>login</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        if(route.id === 'http'){
            return (
                <HttpView navigator={navigator} route={route} />
            );
        }

        if(route.id === 'shop'){
            return (
                <ShopView navigator={navigator} route={route}/>
            );
        }
        if(route.id === 'viewpager'){
            return (
                <ViewPager navigator={navigator} route={route}/>
            );
        }
        if(route.id === 'userinfo'){
            return (
                <UserInfoView navigator={navigator} route={route}/>
            );
        }
        if(route.id === 'login'){
            return (
                <Login navigator={navigator} route={route}/>
            );
        }


    },
    render: function(){
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