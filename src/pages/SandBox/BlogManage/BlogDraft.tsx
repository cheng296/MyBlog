import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { draftList } from '../../../services/SandBox/BlogManage/BlogDraft';

const BlogDraft: React.FC = () => {
  const [BlogDraftList, setBlogDraftList] = useState([])
  const columns = [
    {
      title: '博客标题',
      dataIndex: 'title',
      key: 'title',
      render: (title: string, item: any) => {
        return <a href={`#/blog-manage/blog-preview/${item._id}`}>{title}</a>
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