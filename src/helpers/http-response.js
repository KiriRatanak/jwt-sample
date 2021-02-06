function makeHttpRes ({ statusCode, resData={} }) {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode,
    data: JSON.stringify({resData})
  }
}

export default self = {
	'okay': () => {
		makeHttpRes({
			statusCode : 200, 
			resData : {
				success: true,
				message: 'Intended action finished successfully.',
			}
		})
	},

	'created': (result) => {
		makeHttpRes({
			statusCode : 201,
			resData : {
				success: true,
				message: 'Resource created.',
				result: result
			}
		})
	},

	'no_content': () => {
		makeHttpRes({
			statusCode : 204,
		})
	},

	'bad_request': () => {
		makeHttpRes({
			statusCode : 400,
			resData : {
				success: false,
				message: 'Missing Required Param (or) Invalid Required Param'
			}
		})
	},

	'not_authenticate': () => {
		makeHttpRes({
			statusCode : 401,
			resData : {
				success: false,
				message: 'Request not authenticated.'
			}
		})
	},

	'insufficient_right': () => {
		makeHttpRes({
			statusCode : 403,
			resData : {
				success: false,
				message: 'Forbidden request. User do not have sufficient right.'
			}
		})
	},

	'not_found': () => {
		makeHttpRes({
			statusCode : 400,
			resData : {
				success: false,
				message: 'Cannot map URI to any resources.'
			}
		})
	},

	'method_not_allow': () => {
		makeHttpRes({
			statusCode : 405,
			resData : {
				success: false,
				message: 'Http(s) method not allow.'
			}
		})
	},

	'unsupported_content_type': () => {
		makeHttpRes({
			statusCode : 415,
			resData : {
				success: false,
				message: 'Unsupported Content-Type Header.'
			}
		})
	},

	'too_many_request': (duration) => {
		makeHttpRes({
			statusCode : 429,
			resData : {
				success: false,
				message: `Too many requests. Retry after ${duration}.`
			}
		})
	},

	'any_error': () => {
		makeHttpRes({
			statusCode : 500,
			resData : {
				success: false,
				message: 'Internal server error.'
			}
		})
	}
}