/**
 * create at 06/11/19
 */

import { requestRemote } from './base'

async function fetchLastVesion({body, ...rest}){
	try{
		let curOptions = {
			url: 'am/app/lastVersion',
			body,
			...rest,
		}
		const ret = await requestRemote({options: curOptions})
		return ret
	}catch(e){
		throw e
	}
}

export {
	fetchLastVesion,
}