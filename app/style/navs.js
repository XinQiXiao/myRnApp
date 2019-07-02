/**
 * create at 07/02/19
 */
import React from 'react'

// components
import { NavBackComponents, } from '../components/system'

// const
const BLUE_COLOR_A = '#73b1fa'
const { NavLeftIcon } = NavBackComponents

const navDefaultOptions = Object.freeze({
  headerStyle: {
		backgroundColor: BLUE_COLOR_A,
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: '500',
		fontSize: 18,
		letterSpacing: 0.5
	},
	headerBackTitle: null,
	headerBackImage: ({tintColor, title})=>(
		<NavLeftIcon tintColor={tintColor}/>
	),
	headerLeftContainerStyle: {
		paddingLeft: 10
	}
})

export {
  navDefaultOptions,
}