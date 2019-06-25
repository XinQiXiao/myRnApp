/**
 * create at 06/24/19
 */
import React, { Component } from 'react'
import { View, Text, Animated, StyleSheet, } from 'react-native'

export default class AnimatedComponent extends Component{
  state = {
    fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
  }

  componentDidMount() {
    Animated.timing(                  // 随时间变化而执行动画
      this.state.fadeAnim,            // 动画中的变量值
      {
        toValue: 1,                   // 透明度最终变为1，即完全不透明
        duration: 3000,              // 让动画持续一段时间
      }
    ).start();                        // 开始执行动画
  }

  render(){
    const { fadeAnim } = this.state;
    return (
      <Animated.View                 // 使用专门的可动画化的View组件
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // 将透明度指定为动画变量值
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})