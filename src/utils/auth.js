import Cookie from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookie.get(TokenKey)
}

export function setToken(TokenKey, token) {
  return Cookie.set(TokenKey, token)
}

export function removeToken(TokenKey) {
  return Cookie.remove(TokenKey)
}
