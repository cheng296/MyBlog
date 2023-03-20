import React from 'react'
import { Button, Form, Input, message } from 'antd';
import './index.css'
import { loginCheck } from '../../services/Login';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {

  const navigate = useNavigate()
  const onFinish = (values: any) => {
    loginCheck(values).then(res => {
      if (res.data.ok) {
        const { authorization } = res.headers
        localStorage.setItem('token', authorization)
        localStorage.setItem('username', values.username)
        navigate('/')
      } else {
        message.error('用户名或密码不匹配')
      }
    })
  };
  const handlehome = () => {
    navigate('/')
  }
  return (
    <div>
      <Button onClick={() => handlehome()}>返回首页</Button>
      <div className="loginForm">
        <span className='title'>
          用户登录
        </span>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
            labelCol={{span:4}}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
            labelCol={{span:4}}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login;