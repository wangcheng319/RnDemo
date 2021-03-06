/**
 * Created by wangc on 2016/11/23.
 */

import React, { Component } from 'react';
import {  Text,
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    ViewPagerAndroid
} from 'react-native';

export  default class TextDemo extends  Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
      }

    show(txt) {
        alert(txt);
    }


    render(){
        return(
            <View>
                <ViewPagerAndroid
                    initialPage={0}>
                    <View style ={styles.flex}>

                        <Image style={styles.img}
                               source={require('./img/logo.png')}
                        />
                        <TouchableHighlight
                            onPress={this.show.bind(this, '第一个页面') }
                            underlayColor='#333'>
                            <Text style={styles.touchtext}>haha</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.center}>
                        <TouchableHighlight
                            onPress={this.show.bind(this, '第二个页面') }
                            underlayColor='#333'>
                            <Text  style={[{ fontSize: 39 }]}>第二个页面</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.center}>
                        <Text  style={[{ fontSize: 39 }]}>第三个页面</Text>
                    </View>
                </ViewPagerAndroid>
            </View>
        );
    }
}

const  styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderColor: '#ccc',
    },
    touchtext: {
        fontSize: 39,
        width: 300,

    },

    center: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

module.exports = TextDemo;
