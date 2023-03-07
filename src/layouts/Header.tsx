import { Layout, Menu, Dropdown, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const { Header } = Layout;

const Headers: React.FC = () => {
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    const titles: MenuProps['items'] = [
        {
            key: '/home',
            label: `首页`,
            onClick: () => {
                navigate('/home')
            }
        },
        {
            key: '/category',
            label: `博客分类`,
            onClick: () => {
                navigate('/category')
            }
        },
        {
            key: '/blog-manage',
            label: `博客管理`,
            onClick: () => {
                navigate('/blog-manage')
            }
        }
    ];

    const user: MenuProps['items'] = [
        {
            key: '1',
            label: username
        },
        {
            key: '2',
            danger: true,
            label: '退出',
            onClick: () => {
                localStorage.removeItem('username')
                localStorage.removeItem('token')
                navigate('/')
            }
        },
    ];

    return (
        <Header className="header" style={{ marginBottom: '4vh' }}>
            {
                localStorage.getItem('username') ?
                    (<div style={{ float: 'right' }}>
                        <span style={{ marginRight: '15px', color: 'white' }}>
                            欢迎{username}回来
                        </span>
                        <Dropdown menu={{ items: user }}>
                            <Avatar size="large" icon={<UserOutlined />} />
                        </Dropdown>
                    </div>)
                    : (<div style={{ float: 'right'}}>
                        <a href='#/login' style={{color: 'white'}}>登录</a>;nbsp
                        <a href='#/register' style={{color: 'white'}}>注册</a>
                    </div>)
            }
            <Menu theme="dark" mode="horizontal" selectedKeys={["/" + useLocation().pathname.split('/')[1]]} items={titles} />

        </Header>
    )
}
export default Headers;