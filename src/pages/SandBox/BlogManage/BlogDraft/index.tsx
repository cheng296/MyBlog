import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, EditOutlined, UploadOutlined } from '@ant-design/icons';
import { draftList } from '../../../../services/SandBox/BlogManage/BlogDraft';
import { BlogPublish } from '../../../../services/SandBox/BlogManage/BlogDraft/BlogPublish';
import { useNavigate } from 'react-router-dom';
import { blogDelete } from '../../../../services/SandBox/BlogManage/BlogDraft/BlogDelete';
const BlogDraft: React.FC = () => {
  const navigate = useNavigate()
  const [BlogDraftList, setBlogDraftList] = useState<BlogPublish.blogData[]>()
  const columns: ColumnsType<BlogPublish.blogData>= [
    {
      title: '博客标题',
      dataIndex: 'title',
      key: 'title',
      render: (title: string, item: any) => {
        return <a href={`#/blogPreview/${item._id}`}>{title}</a>
      }
    },
    {
      title: '博客分类',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: '博客作者',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '操作',
      render: (item: BlogPublish.blogData) => {
        return <div>
          <Button danger icon={<DeleteOutlined />} shape='circle' onClick={() => {
            blogDelete(item._id).then(res => {
              if (res.data.ok) {
                setBlogDraftList(BlogDraftList?.filter((data:BlogPublish.blogData) => data._id !== item._id))
              }
            })
          }} style={{marginRight:'20px'}}/>
          <Button shape="circle" icon={<EditOutlined />} onClick={() => {
            navigate(`/blogManage/blogUpdate/${item._id}`)
          }} style={{marginRight:'20px'}}/>
          <Button type="primary" shape="circle" icon={<UploadOutlined />} onClick={() => {
            BlogPublish(item._id).then(res => {
              if (res.data.ok) {
                navigate('/blogManage/blogPublished')
              }
            })
          }} />
        </div>
      },

    }
  ]
  const user = localStorage.getItem('username')
  useEffect(() => {
    draftList(user).then(res => {
      setBlogDraftList(res.data)
    })
  }, [user])
  return (
    <div>
      <Table dataSource={BlogDraftList} columns={columns} rowKey={item => item._id} />
    </div>
  )
}

export default BlogDraft;