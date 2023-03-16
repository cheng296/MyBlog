import axios from "axios";
interface blogdata {
    id:string
    title:string,
    category:string,
    content:string,
    username:string,
    state:number
}
export const blogUpdateUp = (params:blogdata) => axios.patch(`/blogupdate/${params.id}`,params)