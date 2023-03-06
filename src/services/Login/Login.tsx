import axios from 'axios'

interface values {
    username: string,
    password: string
}
export const loginCheck = (values:values) => 
    axios.post('http://localhost:5000/login',{
        username:values.username,
        password:values.password
    })