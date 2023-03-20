import React, { useEffect } from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { tokenVerify } from '../../../services/SandBox/BlogManage';
const { Sider, Content } = Layout;

const BlogManage: React.FC = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            tokenVerify(token).then(res => {
                if (!res.data.ok) {
                    localStorage.removeItem('username')
                    localStorage.removeItem('token')
                    navigate('/login')
                } else {
                    let authorization = res.headers.authorization
                    authorization && localStorage.setItem("token", authorization)
                }
            })
        } else {
            navigate('/login')
        }
    }, [navigate])
    const functionList: MenuProps['items'] = [
        {
            key: `/blogManage/blogAdd`,
            icon: React.createElement(UserOutlined),
            label: `撰写博客`,
            onClick: () => {
                navigate('/blogManage/blogAdd')
            }
        },
        {
            key: `/blogManage/blogDraft`,
            icon: React.createElement(UserOutlined),
            label: `草稿箱`,
            onClick: () => {
                navigate('/blogManage/blogDraft')
            }
        },
        {
            key: `/blogManage/blogPublished`,
            icon: React.createElement(UserOutlined),
            label: `已发布`,
            onClick: () => {
                navigate('/blogManage/blogPublished')
            }
        }
    ];
    return (
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    selectedKeys={[useLocation().pathname]}
                    items={functionList}
                />
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Outlet />
            </Content>
        </Layout>
    )
}

export default BlogManage;