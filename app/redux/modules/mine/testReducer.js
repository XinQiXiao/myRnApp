/**
 * create at 07/12/19
 */
import { MINE_TEST_REDUCE_COUNT } from '../../actionsTypes'

const initialState = {
  count: 100
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case MINE_TEST_REDUCE_COUNT:
      return {
        ...state,
        count: state.count-1
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

export {
  reduceCount,
}