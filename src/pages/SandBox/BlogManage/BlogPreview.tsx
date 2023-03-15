import { Descriptions, PageHeader } from 'antd';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { blogPreview } from '../../../services/SandBox/BlogManage/BlogPreview'

interface blogData {
    _id: String,
    title:String,
    category:String,
    content:String,
    username:String,
    state:Number
}
const BlogPreview: React.FC = () => {
    const id = useParams().id!
    const [blogData,setBlogData] = useState<blogData>()
    useEffect(()=>{
        blogPreview(id).then(res=>{
            setBlogData(res.data[0])
            console.log(res.data[0])
        })
    },[id])
    return (
        <div>
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title={blogData?.title}
                subTitle={`类别：${blogData?.category}`}
            >
            </PageHeader>
        </div>
    )
}
export default BlogPreview;
