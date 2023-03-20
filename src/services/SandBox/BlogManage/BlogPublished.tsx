import axios from "axios";
export const blogPublished = (user:any) => axios.get(`/blogPublished?username=${user}&state=2`)