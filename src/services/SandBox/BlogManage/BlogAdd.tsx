import axios from 'axios'

/** 博客上传接口 */
export const blogUp = (params:blogAdd.addReq) =>
    axios.post('/blogManage/add',params)