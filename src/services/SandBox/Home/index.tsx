import axios from "axios";
export const getAllBlog = () => axios.get('/blogManage/getAllBlog?state=2')