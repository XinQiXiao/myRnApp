/**
 * create at 07/12/19
 */
import { combineReducers } from 'redux'

import { testReducer } from './modules/mine'


const reducer = combineReducers({
  mineTest: testReducer
})

export default reducer
