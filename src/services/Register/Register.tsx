import axios from "axios"

export const regiserSend = (values: Register.values) =>
    axios.post('/accountManage/register', {
        username: values.username,
        password: values.password,
        gender: values.gender
    })
