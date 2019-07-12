/**
 * create at 07/12/19
 */
import { 
  MINE_TEST_REDUCE_COUNT,
  MINE_TEST_LOADING_DATA,
  MINE_TEST_LOADING_SUCCESS, 
  MINE_TEST_LOADING_FAIL,
 } from '../../actionsTypes'

const initialState = {
  count: 100,
  query_loading: false,
  query_success: true,
  query_error: null,
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case MINE_TEST_REDUCE_COUNT:
      return {
        ...state,
        count: state.count-1
      }
    case MINE_TEST_LOADING_DATA:
      return {
        ...state,
        query_loading: true,
        query_success: false,
        query_error: null,
      }
    case MINE_TEST_LOADING_SUCCESS:
      return {
        ...state,
        query_loading: false,
        query_success: true,
        query_error: null,
      }
    case MINE_TEST_LOADING_FAIL:
      return {
        ...state,
        query_loading: false,
        query_success: false,
        query_error: action.error,
      }
    default:
      return state
  }
}

function reduceCount(){
  return {
    type: MINE_TEST_REDUCE_COUNT,
  }
}

function loadData(fun){
  console.log('loadData fun=>', (typeof fun.then === 'function'))
  return {
    types: [MINE_TEST_LOADING_DATA, MINE_TEST_LOADING_SUCCESS, MINE_TEST_LOADING_FAIL],
    promise: fun
  }
}

export {
  reduceCount,
  loadData,
}