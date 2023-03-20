import { Button, Input, message, Select } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BlogEditor from '../../../components/BlogEditor';
import { blogUp } from '../../../services/SandBox/BlogManage/BlogAdd';

const BlogAdd: React.FC = () => {
  const navigate = useNavigate()
  const [content, setContent] = useState<any>('')
  const [title, setTitle] = useState<string>('')
  const [category, setCategory] = useState<any>('')
  const {username} = localStorage

  const handleNext = (state: number) => {
    if(title === ''){
      message.error('博客标题不能为空！')
    }
    else if(category === ''){
      message.error('博客类别不能为空！')
    }
    else if (content === '' || content.trim() === '<p></p>') {
      message.error('博客内容不能为空！')
    } 
    else {
      blogUp(title,category,content,username,state).then(res=>{
        if(res.data){
          if(state===1){
            navigate('/blog-manage/blog-draft')
          }else{
            navigate('/blog-manage/blog-published')
          }
        }
      })
    }
  }
  const SelectonChange = (value: string) => {
    setCategory(value)
  };
  const InputonChange = (event: any) => {
    setTitle(event.target.value)
  };
  return (
    <div style={{ backgroundColor: 'white', width: '900px' }}>
      <Input 
        placeholder="请输入您的博客标题"
        onChange={InputonChange}
        style={{marginBottom:'10px'}}
        />
      <Select
        showSearch
        placeholder="选择您的博客类别"
        optionFilterProp="children"
        onChange={SelectonChange}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        style={{marginBottom:'10px'}}
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
      <BlogEditor getContent={(value: any): void => { setContent(value) }} blogContent={content}/>
      <div>
        <Button onClick={() => handleNext(1)} style={{marginRight:'20px'}}>保存到草稿箱</Button>
        <Button onClick={() => handleNext(2)} type='primary'>发布</Button>
      </div>
    </div>
  )
}

export default BlogAdd;
