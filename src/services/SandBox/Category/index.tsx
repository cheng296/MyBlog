import axios from "axios";
export const getBlogCategory = (value:string|number) => axios.get(`/blogManage/getCategoryBlog?category=${value}&state=2`)