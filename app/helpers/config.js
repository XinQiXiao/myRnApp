/**
 * create at 06/11/19
 */

const apiHost = __DEV__ ? 'localhost' : 'localhost'
const apiPort = __DEV__ ? 8093 : 80

const prefixPath = 'am_api'

export {
	apiHost,
	apiPort,
	prefixPath,
}