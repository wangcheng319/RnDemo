/**
 * Created by wangc on 2016/11/11.
 */

import React, { Component } from 'react';
import {
    Navigator,
} from 'react-native';


import Main from './main';

var AwesomeProject = React.createClass({

    getInitialState(){
        return {};
    },

    configureScenceAndroid(){
        return Navigator.SceneConfigs.FloatFromLeft;
    },

    render(){
        var configureScence = this.configureScenceAndroid;
        return (
            <Navigator
                debugOverlay={false}
                initialRoute={{ name: 'Main', component:Main}}//初始界面
                configureScence={{ configureScence }}//转场动画
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    if(route.component){
                        return <Component  {...route.params} navigator={navigator} />//跳转到目标界面，这里把navigator传过去，所以在子页面中可以直接根据this.props.navigator获取
                    }
                }}
            />
        );
    }
});

module.exports = AwesomeProject