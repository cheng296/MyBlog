import { Avatar, List, Segmented } from 'antd';
import React, { useEffect, useState } from 'react';
import { getBlogCategory } from '../../../services/SandBox/Category';
import './index.css'

const blogCategoryList = ['Javascript', 'Typescript', 'Html', 'css', 'React', '其他']
const Category: React.FC = () => {
  const [blogList, setBlogList] = useState<Home.blogList[]>()
  useEffect(() => {
    getBlogCategory('Javascript').then(res => {
      setBlogList(res.data)
    })
  }, [])
  return (
    <div>
      <Segmented options={blogCategoryList}
        onChange={(value) => {
          getBlogCategory(value).then(res => {
            setBlogList(res.data)
          })
        }}
        size='large'
      />
      <List
        itemLayout="vertical"
        size="large"
        style={{ width: '60vw', height: "70vh", marginTop:'2vh'}}
        pagination={{
          pageSize: 4,
        }}
        dataSource={blogList}
        renderItem={item => (
          <List.Item
            key={item.title}
            style={{ height: '17vh' }}
            extra={
              <img
                width={'120vw'}
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
    </div>
  )
}

export default Category;