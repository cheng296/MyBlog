import { Table } from 'antd';
import React,{useEffect, useState} from 'react'
import { draftList } from '../../../services/SandBox/BlogManage/BlogDraft';

const BlogDraft: React.FC = () => {
  const [BlogDraftList,setBlogDraftList] = useState([])
  const columns = [
    {
      title: '博客标题',
      dataIndex: 'title',
      key: 'title',
      render: (title:string) => {
        return <a>{title}</a>
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
  useEffect(()=>{
    draftList().then(res=>{
      setBlogDraftList(res.data)
    })
  },[])
  return (
    <div>
      <Table dataSource={BlogDraftList} columns={columns}/>
    </div>
  )
}

export default BlogDraft;