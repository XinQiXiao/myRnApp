/**
 * create at 07/12/19
 */
import { createStore } from 'redux'

import reducer from './reducer'

function _createStore(){
  return createStore(reducer)
}

export {
  _createStore,
}