import { List, Segmented } from 'antd';
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
        size="small"
        dataSource={blogList}
        renderItem={item => <List.Item>
          <List.Item.Meta
            title={<a href={`#/blogPreview/${item._id}`}>{item.title}</a>} 
            description={<div style={{ float: 'right', width: '20vw' }}><span>作者：{item.username}</span><span style={{ marginLeft: '3vw' }}>博客分类：{item.category}</span></div>}
            />
        </List.Item>}
        pagination={{
          pageSize: 7,
        }}
        style={{
          marginTop: '5vh',
          height: '60vh'
        }}
      />
    </div>
  )
}

export default Category;