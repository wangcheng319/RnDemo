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

     componentDidMount() {//组件已经加载完成
         this.setState({
             name:this.props.user,//获取重上个页面传递过来的值
             wd:this.props.pwd,

         })
     }


    render() {
        var navigationView = (
            <View style={{backgroundColor: '#fff',justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row'}}>
                <View style={{marginTop:16}}>
                <Text style={{backgroundColor:'#fff666'}}>姓名:{this.state.name}</Text>

                        <TouchableHighlight
                            //按下后背景透明度变化
                            activeOpacity={0.7}
                            //按下后背景颜色
                            underlayColor={'red'}

                            onPress={()=>ToastAndroid.show(this.state.wd,1000)}>

                            <Text >密码:{this.state.wd}</Text>
                        </TouchableHighlight>
                </View>
            </View>
        );

        return (
                //DrawerLayoutAndroid必须是顶层布局
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.left}
                    renderNavigationView={() => navigationView}
                >
                    <View style={{justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row'}}>
                        <Text>{this.state.name}</Text>
                    </View>

                </DrawerLayoutAndroid>
        );
    }
}

const  styles = StyleSheet.create({



});

module.exports = Info;