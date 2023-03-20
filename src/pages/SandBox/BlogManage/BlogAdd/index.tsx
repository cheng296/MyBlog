import { Button, Input, message, Select } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BlogEditor from '../../../../components/BlogEditor';
import { blogUp } from '../../../../services/SandBox/BlogManage/BlogAdd';

const selectList = [
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
]
const BlogAdd: React.FC = () => {
  const navigate = useNavigate()
  const [content, setContent] = useState<any>('')
  const [title, setTitle] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const { username } = localStorage

  const handleNext = (state: number) => {
    if (title === '') {
      message.error('博客标题不能为空！')
    }
    else if (category === '') {
      message.error('博客类别不能为空！')
    }
    else if (content === '' || content.trim() === '<p></p>') {
      message.error('博客内容不能为空！')
    }
    else {
      blogUp({ title, category, content, username, state }).then(res => {
        if (res.data) {
          if (state === 1) {
            navigate('/blogManage/blogDraft')
          } else {
            navigate('/blogManage/blogPublished')
          }
        }
      })
    }
  }
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ backgroundColor: 'white', width: '60vw' }}>
        <Input
          placeholder="请输入您的博客标题"
          onChange={(event: any) => {
            setTitle(event.target.value)
          }}
          style={{ marginBottom: '2vh' }}
        />
        <Select
          showSearch
          placeholder="选择您的博客类别"
          optionFilterProp="children"
          onChange={(value: string) => {
            setCategory(value)
          }}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          style={{ marginBottom: '2vh' }}
          options={selectList}
        />
        <BlogEditor getContent={(value: any): void => { setContent(value) }} blogContent={content} />
      </div>
      <div style={{ marginLeft: "2vw" }}>
        <Button onClick={() => handleNext(1)} style={{ marginBottom: '2vw' }}>保存到草稿箱</Button>
        <Button onClick={() => handleNext(2)} type='primary'>发布</Button>
      </div>
    </div>
  )
}

export default BlogAdd;
