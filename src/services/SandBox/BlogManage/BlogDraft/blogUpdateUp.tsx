import axios from "axios";
interface blogdata {
    _id:string
    title:string,
    category:string,
    content:string,
    username:string,
    state:number
}
export const blogUpdateUp = (params:blogdata) => axios.patch(`/blogupdate?_id=${params._id}`,params)