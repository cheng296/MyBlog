declare namespace BlogDraft{
    /** 更新文章的接口入参 */
    interface blogdata {
        _id:string
        title:string,
        category:string,
        content:string,
        username:string,
        state:number
    }
}