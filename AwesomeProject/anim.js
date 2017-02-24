/**
 * Created by wangc on 2017/2/24.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    ToastAndroid,
    Animated,
} from 'react-native';

export default  class Anim extends  Component{

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0), //设置初始值
        };
    }

    toRight(){
        ToastAndroid.show("toright",1000)
        Animated.timing(
            this.state.fadeAnim,//初始值
            {toValue: 1}//结束值
        ).start();//开始
    }

    render(){
        return(
        <View>
            <TouchableHighlight
                style={styles.back}
                onPress={()=>this.props.navigator.pop()}
            >
            <Text>
                动画测试（back）
            </Text>
            </TouchableHighlight>

            <View style={{flexDirection:'row',flex:1,alignItems:'center',marginTop:100}}>
            <TouchableHighlight
                style={styles.to_right}
                onPress={()=>this.toRight()}
            >
                <Text>
                    渐变显示
                </Text>
            </TouchableHighlight>
                /*opacity设置控件的透明度*/
                <Animated.View style={{backgroundColor:"red",width:40,height:30,marginLeft:50,opacity: this.state.fadeAnim}}>

                </Animated.View>

            </View>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    back:{
        backgroundColor:'#68fba4',
        height:30,
        justifyContent :'center',
        alignItems:'center',
    },

    to_right:{
        height:50,
        marginTop:20,
        width:80,
    },
});