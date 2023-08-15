declare namespace blogAdd{
    /** 上传接口的入参 */
    interface addReq{
        title: string,
        category: string,
        content: any,
        username: string,
        state: number,
        imgURL: string
   }
}