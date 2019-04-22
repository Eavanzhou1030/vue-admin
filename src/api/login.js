import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    methods: 'POST',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    methods: 'POST'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    methods: 'GET',
    params: { token }
  })
}