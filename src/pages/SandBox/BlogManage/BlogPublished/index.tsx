import { Table, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { blogPublished } from '../../../../services/SandBox/BlogManage/BlogPublished'
import { blogDelete } from '../../../../services/SandBox/BlogManage/BlogDraft/BlogDelete'

const BlogPublished: React.FC = () => {
  const [BlogPublishedList, setBlogPublishedList] = useState<BlogPublish.blogData[]>([])
  const columns = [
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
        return <Tag color="red" onClick={() => {
          blogDelete(item._id).then(res => {
            if (res.data.ok) {
              setBlogPublishedList(BlogPublishedList.filter((data: any) => data._id !== item._id))
            }
          })
        }}>删除</Tag>
      }
    },
  ]
  const user = localStorage.getItem('username')
  useEffect(() => {
    blogPublished(user).then(res => {
      setBlogPublishedList(res.data)
    })
  }, [user])
  return (
    <div>
      <Table dataSource={BlogPublishedList} columns={columns} rowKey={item => item._id} />
    </div>
  )
}

export default BlogPublished;