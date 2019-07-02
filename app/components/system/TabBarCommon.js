/**
 * create at 07/02/19
 */
import React from 'react'
import { Image, StyleSheet, View, Text, } from 'react-native'
import _ from 'lodash'

const styles = StyleSheet.create({
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	iconStyle: {
		width: 23,
		height: 23,
	},
	badgeView: {
		position: 'absolute',
		right: -6,
		top: -3,
		backgroundColor: '#f00',
		borderRadius: 6,
		width: 12,
		height: 12,
		justifyContent: 'center',
		alignItems: 'center'
	},
	badgeText: {
		color: '#fff',
		fontSize: 10,
		fontWeight: 'bold'
	}
})

const TabBarIcon = ({focused, tintColor, selImg, norImg, badgeCount = 0})=>(
	<View style={styles.iconContainer}>
		<Image source={focused ? selImg : norImg}
			style={[{tintColor}, styles.iconStyle]}
		/>
		{
			(_.isNumber(badgeCount) && badgeCount > 0) ? (
				<View style={styles.badgeView}>
					<Text style={styles.badgeText}>{badgeCount}</Text>
				</View>
			) : null
		}
	</View>
)

export {
	TabBarIcon,
}