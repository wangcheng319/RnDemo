/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
} from 'react-native';


class Login extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            username:'',
            passwd:'',
            isShow:true,
        };
      }

      _getValue(){
          let name = this.state.username;
          let pd = this.state.passwd;
          let i = this.state.isShow;


          ToastAndroid.show(name,1000);
          ToastAndroid.show(pd,1000);
          if (i){
              ToastAndroid.show("1",1000);
          }else {
              ToastAndroid.show("0",1000);
          }



      }



    render() {
        return (

            <View style={{backgroundColor: '#f4f4f4', flex: 1, justifyContent: 'center'}}>

                <Image
                    style={styles.style_image}
                    source={require('./img/app_icon.png')}/>
                <TextInput
                    style={styles.style_user_input}
                    placeholder='QQ号/手机号/邮箱'
                    numberOfLines={1}
                    autoFocus={false}
                    underlineColorAndroid={'transparent'}
                    textAlign='center'
                    onChangeText = {(val)=>this.setState({username: val,isShow:false})}
                    value={ this.state.username }
                />
                <View
                    style={{height: 1, backgroundColor: '#f4f4f4'}}
                />
                <TextInput
                    style={styles.style_pwd_input}
                    placeholder='密码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={false}
                    textAlign='center'
                    onChangeText = {(val)=>this.setState({passwd: val})}
                    value={ this.state.passwd }

                />

                <TouchableHighlight
                    //按下后背景透明度变化
                    activeOpacity={0.7}
                    //按下后背景颜色
                    underlayColor={'red'}
                    style={styles.style_view_commit}
                    onPress={()=>this._getValue()}>

                    <Text style={{color: '#fff'}}>
                        登录
                    </Text>
                </TouchableHighlight>

                <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', bottom: 10}}>
                    <Text style={styles.style_view_unlogin}>
                        无法登录?
                    </Text>
                    <TouchableHighlight
                        //按下后背景透明度变化
                        activeOpacity={0.7}
                        //按下后背景颜色
                        underlayColor={'blue'}
                        style={styles.style_view_new}
                        onPress={()=>this.props.navigator.pop()}>

                        <Text style={styles.style_view_register}>
                            {this.state.username}
                        </Text>

                    </TouchableHighlight>


                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    style_image: {
        borderRadius: 35,
        height: 70,
        width: 70,
        marginTop: 80,
        alignSelf: 'center',
    },
    style_user_input: {
        backgroundColor: '#fff',
        marginTop: 30,
        height: 40,

    },
    style_pwd_input: {
        backgroundColor: '#fff',
        height: 40,
    },
    style_view_commit: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#63B8FF',
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    style_view_unlogin: {
        fontSize: 12,
        color: '#63B8FF',
        marginLeft: 10,
    },
    style_view_register: {
        fontSize: 12,
        color: '#63B8FF',
        marginRight: 10,
        alignItems: 'flex-end',
        flex: 1,
        flexDirection: 'row',
        textAlign: 'right',
    },

    style_view_new: {
        marginRight: 10,
        alignItems: 'flex-end',
        flex: 1,
        flexDirection: 'row',
    },
});


module.exports = Login;