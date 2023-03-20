import axios from "axios";
export const tokenVerify = (token: string) => axios.get('/verify',
    { headers: { Authorization: `Bearer ${token}` } }
)