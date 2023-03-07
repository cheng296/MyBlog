import axios from "axios";
export const tokenVerify = (token: string) => axios.get('http://localhost:5000/verify',
    { headers: { Authorization: `Bearer ${token}` } }
)