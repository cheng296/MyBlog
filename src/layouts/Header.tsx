import { Layout, Menu, Dropdown, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const { Header } = Layout;

interface props {
    name?: string;
    sex?: string;
    age?: number;
    fun?: () => void;
}

const Headers: React.FC<props> = () => {
    const navigate = useNavigate()
    /** 命名规范！！！！！ */
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

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'admin'
        },
        {
            key: '2',
            danger: true,
            label: '退出',
        },
    ];

    return (
        <Header className="header" style={{ marginBottom: '4vh' }}>
            <div style={{ float: 'right' }}>
                <span style={{ marginRight: '15px', color: 'white' }}>
                    欢迎admin回来
                </span>
                <Dropdown menu={{ items }}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
            <Menu theme="dark" mode="horizontal" selectedKeys={[useLocation().pathname]} items={titles} />

        </Header>
    )
}
export default Headers;