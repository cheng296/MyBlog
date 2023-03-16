import axios from "axios";
export const blogUpdate = (id:string) => axios.get(`/blogPreview?_id=${id}`)