import axios from "axios";
export const BlogPublish = (id:string) => axios.patch(`/blogPublish?_id=${id}`,{
    state:2
})