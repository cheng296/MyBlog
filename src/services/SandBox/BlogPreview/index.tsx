import axios from "axios";
export const blogPreview = (id:string) => axios.get(`/blogManage/blogPreview?_id=${id}`)