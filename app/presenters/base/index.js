/**
 * create at 06/11/19
 */

import { AxiosApi, apiConfig } from '../../helpers' 

// const 
const { apiHost, apiPort, prefixPath, } = apiConfig

async function requestRemote({options}){
	try{
		let curOptions = {
			...options,
			baseUrl: `http://${apiHost}:${apiPort}/${prefixPath}`
		}
		const ret = await AxiosApi.ajax(curOptions)
		return ret
	} catch(e){
		throw e
	}
}

export {
	requestRemote,
}