export const environment = {
  production: true,
}

export const api = {
  baseUrl: 'http://3.236.197.83:3000/api/v1/',
  endpoints: {
    categories: '/categories',
    devices: '/devices',
  },
}
export const getApi = (key: String) => {
  let endpoint
  for (let proper in api.endpoints) {
    if (proper === key) {
      endpoint = proper
    }
  }

  return `${api.baseUrl}${endpoint}`
}
