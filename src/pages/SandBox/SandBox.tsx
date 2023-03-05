import React from 'react'
import { Outlet } from 'react-router-dom'
import { Breadcrumb, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './SandBox.css'
import Headers from '../../layouts/Header';
import Footers from '../../layouts/Footer';

const { Content, Sider } = Layout;


const SandBox: React.FC = () => {
  /** 命名规范！！！（不要写item2）*/
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
    <Layout>
      <Headers />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footers />
    </Layout>
  )
}

export default SandBox;