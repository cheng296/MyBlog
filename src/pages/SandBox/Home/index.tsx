import { Avatar, Card, List } from 'antd'
import { HeartTwoTone } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { getAllBlog } from '../../../services/SandBox/Home';
import './index.css'

const Home: React.FC = () => {
  const [blogList, setBlogList] = useState<Home.blogList[]>()
  useEffect(() => {
    getAllBlog().then(res => {
      setBlogList(res.data)
    })
  }, [])
  return (
    <div style={{ display: 'flex' }}>
      <List
        itemLayout="vertical"
        size="large"
        header={<div><HeartTwoTone twoToneColor="#eb2f96" style={{marginRight:'0.3vw'}}/><span>博客合集</span></div>}
        style={{ width: '60vw', height: "70vh" }}
        pagination={{
          pageSize: 4,
          position: 'bottom',
          hideOnSinglePage:true,
        }}
        dataSource={blogList}
        renderItem={item => (
          <List.Item
            key={item.title}
            style={{height:'17vh'}}
            extra={
              <img
                width={'100vw'}
                alt="URL无效"
                src={item.imgURL}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar size="large" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{item.username}</Avatar>}
              title={<a href={`#/blogPreview/${item._id}`}>{item.title}</a>}
              description={<div style={{ float: 'left', width: '20vw' }}><span>作者：{item.username}</span><span style={{ marginLeft: '3vw' }}>博客分类：{item.category}</span></div>}
            />
          </List.Item>
        )}
      />
      <div>
        <Card title="文章推荐" style={{ width: '20vw', marginLeft: '5vw', height: "35vh" }}>
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
