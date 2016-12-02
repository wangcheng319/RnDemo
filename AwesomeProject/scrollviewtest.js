/**
 * Created by wangc on 2016/11/24.
 */
import React, {Component} from 'react';
import {
    AppRegistry, Text,
    StyleSheet,
    Image,
    View,
    TextInput,
    TouchableOpacity,
    Navigator,
    ScrollView,
} from 'react-native';

  export  default  class  scrollViewtest extends  Component{

      // 构造
        constructor(props) {
          super(props);

          // 初始状态
          this.state = {};
        }

    render(){
        return(
            <View>
                <TouchableOpacity
                    style={{backgroundColor:'red',padding:10,justifyContent:'center',alignItems:'center'}}
                    onPress={()=>this.props.navigator.pop()}>
                    <Text>
                        返回
                    </Text>
                </TouchableOpacity>

            <ScrollView
                //horizontal={true}  设置水平滚动
                //contentContainerStyle={styles.style_content}//设置整个scrollview的样式
                onScroll={function () {//滚动中
                    console.log('scrolling');
                }}
                //pagingEnabled={true}//设置之后一次只能滑动一页，只有在水平情况下才生效
                //scrollEnabled={false}//设置是否能滚动
                showsVerticalScrollIndicator={true}//设置滚动条
                pageSize={10}>

                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <View style={styles.style_line1}>
                    <Text>1</Text>
                </View>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>
                <Image source={require('./img/logo.png')} style={styles.style_item_image}/>

            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    style_line1:{
        height:30,
        justifyContent: 'center',
        backgroundColor:'cornsilk',
        marginTop:8,
        alignItems:'center',
    },
    style_item_image:{
        margin:10,
    },
    style_content:{
        padding:50
    },
})

// module.exports  = scrollViewtest;