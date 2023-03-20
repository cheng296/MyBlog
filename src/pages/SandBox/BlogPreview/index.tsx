import { PageHeader } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { blogPreview } from '../../../services/SandBox/BlogManage/BlogPreview'

const BlogPreview: React.FC = () => {
    const id = useParams().id!
    const [blogData, setBlogData] = useState<blogPreview.blogData>()
    useEffect(() => {
        blogPreview(id).then(res => {
            setBlogData(res.data[0])
        })
    }, [id])
    return (
        <div>
            {
                blogData && <div>
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title={blogData?.title}
                        subTitle={`类别：${blogData?.category}`}
                    >
                    </PageHeader>
                    <div dangerouslySetInnerHTML={{
                        __html: blogData.content
                    }}
                        style={{
                            margin: '0 24px',
                            height:'562px',
                            overflow:'scroll'
                        }}>
                    </div>
                </div>
            }
        </div>
    )
}
export default BlogPreview;
