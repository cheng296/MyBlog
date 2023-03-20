import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { regiserSend } from '../../services/Register/Register';

const { Option } = Select;

const Register: React.FC = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const onFinish = (values: any) => {
        regiserSend(values).then(res => {
            if (res.data.ok === 1) {
                navigate('/login')
            }
        })
    };
    const handlehome = () => {
        navigate('/')
    }
    return (
        <div>
            <Button onClick={() => handlehome()}>返回首页</Button>
            <div className='registerForm'>
                <span className="title" style={{ display: 'block', textAlign: 'center' }}>
                    注册用户
                </span>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        label="用户名"
                        rules={[
                            {
                                type: 'string',
                                message: 'The input is not valid username!',
                            },
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请确认您的密码!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('两次密码不一致!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        label="性别"
                        rules={[{ required: true, message: '请选择您的性别!' }]}
                    >
                        <Select placeholder="请选择您的性别">
                            <Option value="male">男</Option>
                            <Option value="female">女</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default Register;
