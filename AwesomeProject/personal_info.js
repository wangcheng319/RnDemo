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

 export  default  class  Info extends Component{
     // 构造
       constructor(props) {
         super(props);
         // 初始状态
         this.state = {
              name:'',
              wd:'',
         };
       }

     componentDidMount() {
         this.setState({
             name:this.props.user,
             wd:this.props.pwd,

         })
     }


    render() {
        var navigationView = (
            <View style={{backgroundColor: '#fff',justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row'}}>


                <View style={{marginTop:16}}>
                <Text >姓名:{this.state.name}</Text>

                <Text >密码:{this.state.wd}</Text>

                </View>
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

                        <Text>{this.state.name}</Text>


                    </View>

                </DrawerLayoutAndroid>
        );
    }
}

const  styles = StyleSheet.create({



});

module.exports = Info;