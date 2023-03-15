import axios from "axios";
export const blogPreview = (id:string) => axios.get(`http://localhost:5000/blogPreview?_id=${id}`)