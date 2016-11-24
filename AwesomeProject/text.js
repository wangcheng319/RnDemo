/**
 * Created by wangc on 2016/11/23.
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

class TextDemo extends  Component{

    render(){
        return(
            <View>

                <TouchableHighlight
                    //按下后背景透明度变化
                    activeOpacity={0.7}
                    //按下后背景颜色
                    underlayColor={'blue'}
                    style={styles.style_back}
                    onPress={()=>this.props.navigator.pop()}
                >
                    <Text style={styles.style_back_text}>
                        返回
                    </Text>
                </TouchableHighlight>


                <Text >
                    Text相关属性
                </Text>
            </View>
        );
    }
}

const  styles = StyleSheet.create({
    style_back:{
        backgroundColor:'hotpink',
        padding:16,
    },
    style_back_text:{
        color:'white',
        fontSize:16,
    },
});

module.exports = TextDemo;
