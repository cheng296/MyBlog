import { Button, Input, message, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BlogEditor from '../../../components/BlogEditor'
import { blogUpdateUp } from '../../../services/SandBox/BlogManage/BlogDraft/blogUpdateUp'
import { blogUpdate } from '../../../services/SandBox/BlogManage/BlogUpdate'

const BlogUpdate: React.FC = () => {
    const navigate = useNavigate()
    const { username } = localStorage
    const [blogData, setBlogData] = useState<blogPreview.blogData>({
        _id: '',
        title: '',
        category: '',
        content: '',
        username: '',
        state: 0
    })
    const _id = useParams().id!
    useEffect(() => {
        blogUpdate(_id).then(res => {
            setBlogData(res.data[0] )
        })
    }, [_id])
    const handleNext = (state: number) => {
        if (blogData.title === '') {
            message.error('博客标题不能为空！')
        }
        else if (blogData.category === '') {
            message.error('博客类别不能为空！')
        }
        else if (blogData.content === '' || blogData.content.trim() === '<p></p>') {
            message.error('博客内容不能为空！')
        }
        else {
            blogUpdateUp({_id, title: blogData.title, category: blogData.category, content: blogData.content, username, state }).then(res => {
                if (res.data) {
                    if (state === 1) {
                        navigate('/blog-manage/blog-draft')
                    } else {
                        navigate('/blog-manage/blog-published')
                    }
                }
            })
        }
    }
    const SelectonChange = (value: string) => {
        setBlogData({ ...blogData, category: value })
    };
    const InputonChange = (event: any) => {
        setBlogData({ ...blogData, title: event.target.value })
    };

    return (
        <>
            {blogData && <div style={{ backgroundColor: 'white', width: '900px' }}>
                <Input
                    placeholder="请输入您的博客标题"
                    onChange={InputonChange}
                    style={{ marginBottom: '20px' }}
                    value={blogData.title}
                />
                <Select
                    showSearch
                    placeholder="选择您的博客类别"
                    optionFilterProp="children"
                    onChange={SelectonChange}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    style={{ marginBottom: '20px' }}
                    value={blogData.category}
                    options={[
                        {
                            value: 'Javascript',
                            label: 'Javascript',
                        },
                        {
                            value: 'Typescript',
                            label: 'Typescript',
                        },
                        {
                            value: 'Html',
                            label: 'Html',
                        },
                        {
                            value: 'css',
                            label: 'css',
                        },
                        {
                            value: 'React',
                            label: 'React',
                        },
                        {
                            value: '其他',
                            label: 'other',
                        },
                    ]}
                />
                <BlogEditor getContent={(value: string): void => { setBlogData({ ...blogData, content: value }) }} blogContent={blogData.content} />
                <div>
                    <Button onClick={() => handleNext(1)} style={{ marginRight: '20px' }}>保存到草稿箱</Button>
                    <Button onClick={() => handleNext(2)} type='primary'>发布</Button>
                </div>
            </div>}</>
    )
}
export default BlogUpdate
