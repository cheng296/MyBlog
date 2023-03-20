import axios from "axios"

export const regiserSend = (values: Register.values) =>
    axios.post('/register', {
        username: values.username,
        password: values.password,
        gender: values.gender
    })
