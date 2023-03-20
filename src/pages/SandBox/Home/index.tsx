import {  Card, List } from 'antd'
import { HeartTwoTone } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { getAllBlog } from '../../../services/SandBox/BlogManage/Home/Home';

const Home: React.FC = () => {
  const [blogList, setBlogList] = useState()
  useEffect(() => {
    getAllBlog().then(res => {
      setBlogList(res.data)
    })
  }, [])
  return (
    <div style={{ display: 'flex' }}>
      <List
        header={<div><HeartTwoTone twoToneColor="#eb2f96" />博客合集</div>}
        itemLayout="horizontal"
        bordered
        style={{ width: '800px', height: "548px" }}
        dataSource={blogList}
        pagination={{
          pageSize: 6,
        }}
        renderItem={(item: blogPreview.blogData) => (
          <List.Item>
            <List.Item.Meta
              title={<a href={`#/blogPreview/${item._id}`}>{item.title}</a>}
              description={<div style={{ float: 'right', width: '300px' }}><span>作者：{item.username}</span><span style={{ marginLeft: '30px' }}>博客分类：{item.category}</span></div>}
            />
          </List.Item>
        )}
      />
      <div>
        <Card title="文章推荐" style={{ width: 300, marginLeft: '100px', height: "300px" }}>
          <p><a href='https://ant.design/components/card-cn'>Antd官方文档</a></p>
          <p><a href='https://react.docschina.org/'>React官方文档</a></p>
          <p><a href='https://www.xiaolincoding.com/'>小林coding</a></p>
          <p><a href='https://developer.mozilla.org/zh-CN/'>MDN</a></p>
        </Card>
      </div>
    </div>
  )
}

export default Home
