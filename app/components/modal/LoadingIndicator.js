/**
 * create at 07/12/19
 */
import React, { Component } from 'react'
import { View, StyleSheet, Text, ActivityIndicator, } from 'react-native'
import PropTypes from 'prop-types'
import _ from 'lodash'

// components
import ModalComponent from './ModalComponent'

const styles = StyleSheet.create({
	loadContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	loadText: {
		marginTop: 10,
		color: '#ececec',
		fontSize: 14,
	}
})

const LoadComponent = ({title, showTitle})=>{
	return (
		<View style={styles.loadContainer}>
			<ActivityIndicator />
			{
				showTitle ? (
					<Text style={styles.loadText}>{title}</Text>
				) : null
			}
		</View>
	)
}

class LoadingComponent extends Component{
  show = ()=>{
		if(_.isFunction(this.refs.loadingIndicatorRef.show)){
			this.refs.loadingIndicatorRef.show()
			return
		}
		const newComponent = this.refs.loadingIndicatorRef
		if(_.isFunction(newComponent.refs.wrapComponent.show)){
			newComponent.refs.wrapComponent.show()
			return
		}
	}
	hide = ()=>{
		if(_.isFunction(this.refs.loadingIndicatorRef.hide)){
			this.refs.loadingIndicatorRef.hide()
			return
		}
		const newComponent = this.refs.loadingIndicatorRef
		if(_.isFunction(newComponent.refs.wrapComponent.hide)){
			newComponent.refs.wrapComponent.hide()
			return
		}
	}

  render(){
    const { title, showTitle, } = this.props
    return (
      <ModalComponent ref="loadingIndicatorRef"
        animationType="fade"
      >
        <LoadComponent title={title} showTitle={showTitle}/>
      </ModalComponent>
    )
  }
}

LoadingComponent.propTypes = {
  title: PropTypes.string.isRequired,
  showTitle: PropTypes.bool.isRequired,
}

export default LoadingComponent
