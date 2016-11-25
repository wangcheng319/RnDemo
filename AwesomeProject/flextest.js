/**
 * Created by wangc on 2016/11/22.
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
} from 'react-native';


class Flex extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isShow:true,
            isToast:true,
            textValue:'one',
        };
      }

      showBox1(){
            <View style={{backgroundColor:'red',width:100,height:100}}>
                <Text>this is box1</Text>
            </View>
      }


    render() {
        return (
            <View>

                <TouchableHighlight
                    //按下后背景透明度变化
                    activeOpacity={0.7}
                    //按下后背景颜色
                    underlayColor={'blue'}
                    onPress={()=>this.props.navigator.pop()}
                >
                    <Text style={{borderWidth:2,backgroundColor:'hotpink',padding:20,justifyContent:'center',alignItems:'center'}}>
                        返回
                    </Text>
                </TouchableHighlight>

                <Text>
                    等分
                </Text>

                { this.showBox1()}

                <View style={styles.style_line1}>

                    <Text style={styles.style_line1_item1}>{this.state.textValue}</Text>

                    <Text style={styles.style_line1_item2}></Text>

                    <Text style={styles.style_line1_item3}></Text>

                </View>

                <View style={styles.style_center}>
                    <Text >
                        居中
                    </Text>
                </View>

                <Text >margin</Text>
                <View style={styles.style_margin_out}>
                    <View style={styles.style_margin_inside}>
                    </View>

                </View>


                <Text >padding</Text>
                <View style={styles.style_padding_out}>
                    <View style={styles.style_padding_inside}>
                    </View>

                </View>

                <View style={{alignSelf: 'flex-end',backgroundColor:'hotpink',padding:16}}>

                    <Text>类似android中的layout_alignParentRight</Text>

                </View>


                <View style={{alignSelf: 'flex-start',backgroundColor:'hotpink',padding:16}}>

                    <Text>居左</Text>

                </View>

                <View style={{alignSelf: 'center',backgroundColor:'hotpink',padding:16}}>

                    <Text>居中</Text>

                </View>


                <Text style={{fontSize:18,color:'darkorchid'}}>总结：margin和padding基本和android一样，flex类似android中的权重</Text>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    style_line1: {
        flexDirection: 'row',
    },

    style_center: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor: 'red',
        marginTop: 16,
    },
    style_margin_out:{
        borderColor:'red',
        borderWidth :3,
        width:100,
        height:100,
    },
    style_margin_inside:{
        width:30,
        height:30,
        marginTop:20,
        backgroundColor:'yellow',
        marginLeft:20,
    },
    style_padding_out:{
        borderColor:'red',
        borderWidth :3,
        width:100,
        height:100,
        paddingLeft:16,
        paddingTop:20,
    },
    style_padding_inside:{
        width:30,
        height:30,
        backgroundColor:'yellow',
    },
    style_line1_item1: {
        backgroundColor: 'blue',
        flex: 1,
        height: 50,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },

    style_line1_item2: {
        backgroundColor: 'red',
        flex: 1,
        height: 50,
        marginRight: 10,
    },

    style_line1_item3: {
        backgroundColor: 'green',
        flex: 1,
        height: 50,
    },

    style_line1_item4: {
        backgroundColor: 'blue',
        flex: 1,
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

});


module.exports = Flex;