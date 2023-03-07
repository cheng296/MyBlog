import axios from "axios"

export const regiserSend = (values: Register.values) =>
    axios.post('http://localhost:5000/register', {
        username: values.username,
        password: values.password,
        gender: values.gender
    })
