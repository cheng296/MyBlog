import axios from "axios";
export const blogUpdate = (id:string) => axios.get(`/blogManage/blogPreview?_id=${id}`)