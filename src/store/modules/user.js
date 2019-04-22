import {getToken, setToken, removeToken} from '@/utils/auth'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    roles: [],
    setting: {}
  }
}

export default user;