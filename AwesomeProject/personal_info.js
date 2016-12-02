/**
 * Created by wangc on 2016/12/1.
 * 个人中心
 */
import React, {Component} from 'react';
import {
    AppRegistry, Text,
    StyleSheet,
    Image,
    View,
    TextInput,
    TouchableHighlight,
    Navigator,
    console,
    Alert,
    ToastAndroid,
    DrawerLayoutAndroid,
    ViewPagerAndroid,

} from 'react-native';

 class  Info extends Component{
     // 构造
       constructor(props) {
         super(props);
         // 初始状态
         this.state = {};
       }


    render() {
        var navigationView = (
            <View style={{backgroundColor: '#fff',justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row'}}>
                <Text>个人中心</Text>
            </View>
        );

        return (
                //DrawerLayoutAndroid必须是顶层布局
                <DrawerLayoutAndroid
                    drawerWidth={150}
                    drawerPosition={DrawerLayoutAndroid.positions.left}
                    renderNavigationView={() => navigationView}
                >
                    <View style={{justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row'}}>
                        <Text>
                            hahahhahahah
                        </Text>

                        <Text>
                            HELLO
                        </Text>


                    </View>

                </DrawerLayoutAndroid>
        );

    }
}

module.exports = Info;