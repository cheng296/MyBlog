import axios from "axios";
export const blogPublished = (user:any) => axios.get(`/blogManage/blogPublished?username=${user}&state=2`)