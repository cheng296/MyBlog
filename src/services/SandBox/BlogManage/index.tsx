import axios from "axios";
export const tokenVerify = (token: string) => axios.get('/accountManage/verify',
    { headers: { Authorization: `Bearer ${token}` } }
)

export const blogDelete = (id: string) => axios.delete(`/blogManage/blogDelete?_id=${id}`)