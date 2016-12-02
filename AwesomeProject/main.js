/**
 * Created by wangc on 2016/12/2.
 */


import React, { Component } from 'react';
import { AppRegistry, Text,
    StyleSheet,
    Image,
    View,
    TextInput,
    TouchableHighlight,
    Navigator,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Login from './login.js';
import Test from './test.js';
import Flex from './flextest.js';
import TextDemo from './text.js';
import Info from './personal_info.js';
import ScrollViewTest from './scrollviewtest.js';

var _navigator;

export  default class Main extends  Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        _navigator = this.props.navigator;
        this.state = {};
    }

    render(){
        return(
            <View>
                <ScrollView>
                    <View>
                        <TouchableOpacity onPress={() => _navigator.push({name:'Flex',component:Flex})} style={ styles.button }>
                            <Text>布局</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => _navigator.push({name:'TextDemo',component:TextDemo})} style={ styles.button }>
                            <Text>Text熟悉</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => _navigator.push({name:'ScrollViewTest',component:ScrollViewTest})} style={ styles.button }>
                            <Text>ScrollView</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => _navigator.push({name:'TextDemo',component:TextDemo})} style={ styles.button }>
                            <Text>动画</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => _navigator.push({name:'TextDemo',component:TextDemo})} style={ styles.button }>
                            <Text>ListView</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => _navigator.push({name:'ViewPager',component:TextDemo})} style={ styles.button }>
                            <Text>ViewPager</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => _navigator.push({name:'Test',component:TextDemo})} style={ styles.button }>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => _navigator.push({name:'Login',component:Login})} style={ styles.button }>
                            <Text>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => _navigator.push({name:'Info',component:Info})} style={ styles.button }>
                            <Text>Info</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    button:{
        height:56,
        margin:10,
        backgroundColor:'#cad6c5',
        justifyContent:'center',
        alignItems:'center',
    },
});



