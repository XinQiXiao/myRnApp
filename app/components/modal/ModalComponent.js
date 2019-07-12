/**
 * create at 07/12/19
 */
import React, { Component } from 'react'
import { Modal, View, TouchableOpacity, StyleSheet, } from 'react-native'
import PropTypes from 'prop-types'

// components
import { enhancedBackHandler, } from '../highComponent'

// style
import { styleDistances } from '../../style'

const styles = StyleSheet.create({
	containerView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.3)'
	},
	touch: {
		position: 'absolute',
		right: 0,
		top: 0,
		width: styleDistances.DEVICES_WIDTH,
		height: styleDistances.DEVICES_HEIGHT,
		backgroundColor: 'transparent',
		zIndex: 99,
	}
})

class ModalComponent extends Component{

  state = {
    visible: false
  }

  show = ()=>{
    this._showModal()
  }
  _showModal = ()=> {
    this.setState({
      visible: true
    })
  }

  hide = ()=>{
    this._hideModal()
  }
  _hideModal = ()=>{
    this.setState({
      visible: false,
    })
  }

  handleHardwareBackPress = ()=>{
    this._hideModal()
    return true
  }

  render(){
    const { visible } = this.state
    const { animationType, children, } = this.props
    return (
      <Modal visible={visible} 
        transparent={true}
        animationType={animationType}
        onRequestClose={this._hideModal}
      >
        <View style={styles.containerView}>
          <TouchableOpacity style={styles.touch} onPress={this._hideModal}/>
          {children}
        </View>
      </Modal>
    )
  }
}

ModalComponent.propTypes = {
  animationType: PropTypes.string.isRequired,
}

// export default (enhancedBackHandler()(ModalComponent))
export default (ModalComponent)