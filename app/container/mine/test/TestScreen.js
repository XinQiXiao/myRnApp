/**
 * create at 07/12/19
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, InteractionManager, } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// component
import { BaseSafeView, } from '../../../components/base'
import { LoadingIndicator, } from '../../../components/modal'

// redux
import { reduceCount, loadData, } from '../../../redux/modules/mine/testReducer'

// presenter
import { appPresenter } from '../../../presenters'

const { fetchLastVesion } = appPresenter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const mapStateToProps = state => ({
  count: state.mineTest.count,
  query_loading: state.mineTest.query_loading,
  query_success: state.mineTest.query_success,
  query_error: state.mineTest.query_error,
})

const mapDispatchToProps = (dispatch) => ({
	myactions: bindActionCreators({
		reduceCount, loadData,
	}, dispatch),
	dispatch,
})

class TestPage extends Component{
  static navigationOptions = {
    title: 'Test',
  }

  state = {
    version: null
  }

  componentDidMount(){
    InteractionManager.runAfterInteractions(()=>{
      this._getVersionData()
    })
  }

  _getVersionData = ()=>{
    this.props.myactions.loadData(this._fetchData)
  }

  _fetchData = async ()=>{
    try{
      let body = {}
      this.refs.testLoadingLayer.show()
      const ret = await fetchLastVesion({body})
      this.refs.testLoadingLayer.hide()
      this.setState({
        version: ret && ret.app_version ? ret.app_version : '0.0'
      })
      return true
    }catch(e){
      this.refs.testLoadingLayer.hide()
      console.log('_fetchData e=>', e)
      throw e
    }
  }

  _changeCount = ()=>{
    this.props.myactions.reduceCount()
  }

  render(){
    const { count } = this.props
    const { version } = this.state
    return (
      <BaseSafeView >
        <View style={styles.container}>
          <Text>{`count is: ${count}`}</Text>
          <Button title="change count" onPress={this._changeCount}/>
          <Text>{`当前版本: ${version}`}</Text>
          <Button title="获取" onPress={this._getVersionData}/>
          <LoadingIndicator ref="testLoadingLayer" title="loading..." showTitle={true}/>
        </View>
      </BaseSafeView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage)