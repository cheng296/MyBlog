import axios from 'axios'

/** 博客上传接口 */
export const blogUp = (title:string,category:string,content:any,username:string,state:number) =>
    axios.post('/add',{
        title,
        category,
        content,
        username,
        state,
    })