import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from './auth'

const sevice = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

sevice.interceptors.request.use(
  config => {
    if(store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

sevice.interceptors.response.use(
  response => response,
  error => {
    console.log('err', error),
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    Promise.reject(error)
  }
)

export default sevice