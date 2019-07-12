/**
 * create at 07/12/19
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// component
import { BaseSafeView, } from '../../../components/base'

// redux
import { reduceCount } from '../../../redux/modules/mine/testReducer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const mapStateToProps = state => ({
	count: state.mineTest.count
})

const mapDispatchToProps = (dispatch) => ({
	myactions: bindActionCreators({
		reduceCount,
	}, dispatch),
	dispatch,
})

class TestPage extends Component{
  static navigationOptions = {
    title: 'Test',
  }

  _changeCount = ()=>{
    this.props.myactions.reduceCount()
  }

  render(){
    const { count } = this.props
    return (
      <BaseSafeView >
        <View style={styles.container}>
          <Text>{`count is: ${count}`}</Text>
          <Button title="change count" onPress={this._changeCount}/>
        </View>
      </BaseSafeView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage)