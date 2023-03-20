import axios from 'axios'

/** 登录验证接口 */
export const loginCheck = (values: Login.values) =>
    axios.post('/login', {
        username: values.username,
        password: values.password
    })