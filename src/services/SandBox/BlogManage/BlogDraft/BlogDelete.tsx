import axios from "axios";
export const blogDelete = (id:string) => axios.delete(`/blogDelete?_id=${id}`)