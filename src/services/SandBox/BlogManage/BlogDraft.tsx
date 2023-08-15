import axios from "axios";

export const draftList = (user:string|null) => axios.get(`/blogManage/getdraft?state=1&username=${user}`)

export const BlogPublish = (id:string) => axios.patch(`/blogManage/blogPublish?_id=${id}`,{
    state:2
})

export const blogUpdateUp = (params:BlogDraft.blogdata) => axios.patch(`/blogManage/blogupdate?_id=${params._id}`,params)