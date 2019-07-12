/**
 * create at 07/12/19
 * 
 * This middleware is used to deal with async actions. 
 * When you have an properties key named `promise`,
 * it means this action is a promise enhanced async action.
 * You can also dispatch a promise directly!
 */

export default function clientMiddleware(){
  return ({dispatch, getState})=> next => action =>{
    // console.log('clientMiddleware action=>', action)
    if(typeof action === 'function')
      return action(dispatch, getState)

    if(isPromise(action))
      return action.then(dispatch)

    // eslint-disable-line no-use-before-define
    const { promise, types, ...rest } = action
    if(!promise)
      return next(action)

    const [ REQUEST, SUCCESS, FAILURE ] = types
    next({...rest, type: REQUEST})
    // pass the API server delegator to the promise
    const actionPromise = promise()
    actionPromise.then(
      (result) => {
				console.log('reducer middleware successful ', result)
				next({...rest, result, type: SUCCESS})
			}, (error)=> {
				console.log('reducer middleware fail')
				next({...rest, error, type: FAILURE})
			}
    ).catch((e)=>{
      console.error(`MIDDLEWARE ERROR:`, error)
			next({...rest, error, type: FAILURE})
    })
    return actionPromise
  }
}

// check if an obj is `Promise`
function isPromise(val){
  return val && typeof val.then === 'function'
}