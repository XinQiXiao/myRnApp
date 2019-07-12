/**
 * create at 07/12/19
 */
import React, {Component} from 'react'
import { Provider } from 'react-redux'

// components
import MainRoot from './container/router/MainRooter'

// store
import { createStore } from './redux'

const store = createStore()

export default class ClientApp extends Component{
  render(){
    return (
      <Provider store={store}>
        <MainRoot />
      </Provider>
    )
  }
}
