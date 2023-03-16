import axios from "axios";
export const blogPreview = (id:string) => axios.get(`/blogPreview?_id=${id}`)