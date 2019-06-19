/**
 * create at 06/11/19
 */
import axios from 'axios'
import _ from 'lodash'

// const
const SEC = 1e3 // 1000ms

class Axios {
	static ajax(options){
		const {
			url = '', method = 'post', baseUrl = '', defaultTime = 10*SEC,
			data = {}, body = {}, showToast = false,
		} = options

		// log
		console.log(`axios url=${url} baseUrl=${baseUrl} showToast=${showToast}`)
		console.log(`axios body=${JSON.stringify(body)}`)

		return new Promise((resolve, reject)=> {
			axios({
				url,
				method,
				baseURL: baseUrl,
				timeout: defaultTime,
				params: (data && data.params) || '',
				headers: {
					'content-type': 'application/json',
				},
				data: {
					...body,
				}
			}).then((response)=>{
				console.log('axios response=>', response)
				if(_.isNil(response))
					throw new Error('数据为null')

				const {status, data} = response
				if(status === 200 && data.code === 0)
					return resolve(data.data)
				
				throw new Error(`errMsg:[${data.code}]${data.message}`)
			}).catch((e)=>{
				console.log('axios e=>', e)
				// showToast && toastCommon.toastShortMiddle(`错误提示 err=${e.message}`)
			 	return reject(e)
			})
		})
	}
}

export default Axios