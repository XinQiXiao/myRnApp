/**
 * create at 07/12/19
 */
import { createStore, applyMiddleware, } from 'redux'
import logger from 'redux-logger'

import  { clientMiddleware } from './middleware'

import reducer from './reducer'

function _createStore(){
  if(__DEV__){
    return createStore(reducer, applyMiddleware(
      logger,
      clientMiddleware(),
    ))
  }
  return createStore(reducer, applyMiddleware(
    clientMiddleware(),
  ))
}

export {
  _createStore,
}