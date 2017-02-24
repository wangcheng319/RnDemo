/**
 * Created by wangc on 2017/2/24.
 */
import React, { Component } from 'react';
import {  Text,
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    ViewPagerAndroid
} from 'react-native';

export  default class viewPagerDemo extends  Component{

    show(txt) {
        alert(txt);
    }

    render(){
        return(
            <View>
                <ViewPagerAndroid
                    initialPage={0}
                    style={styles.pageStyle}>
                    <View style ={styles.flex}>
                        <Image style={styles.img}
                               source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }}
                        />
                        <TouchableHighlight
                            onPress={this.show.bind(this, '第一个页面') }
                            underlayColor='#333'>
                            <Text style={styles.touchtext}>第一个页面</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.center}>
                        <TouchableHighlight
                            onPress={this.show.bind(this, '第二个页面') }
                            underlayColor='#333'>
                            <Text  style={[{ fontSize: 39 }]}>第二个页面</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.bottom}>
                        <Text  style={[{ fontSize: 39 }]}>第三个页面</Text>
                    </View>
                </ViewPagerAndroid>
            </View>
        );
    }
}

const  styles = StyleSheet.create({

    pageStyle: {
        marginTop:10,
        alignItems: 'center',
        height:400,
    },

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
        justifyContent:'center',
        alignItems: 'center',
        textAlign :'center',
    },

    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    bottom:{
      alignItems:'center',
        flex :1,
    }
});
