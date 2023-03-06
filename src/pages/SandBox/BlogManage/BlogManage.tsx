import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Outlet } from 'react-router-dom';
const { Sider, Content } = Layout;

const BlogManage: React.FC = () => {

    const items2: MenuProps['items'] = [
        {
            key: `sub$1`,
            icon: React.createElement(UserOutlined),
            label: `subnav 1`,
        },
        {
            key: `sub$2`,
            icon: React.createElement(UserOutlined),
            label: `subnav 2`,
        },
        {
            key: `sub$3`,
            icon: React.createElement(UserOutlined),
            label: `subnav 3`,
        }
    ];
    return (
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    items={items2}
                />
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Outlet />
            </Content>
        </Layout>
    )
}

export default BlogManage;