import React from 'react'
import { Outlet } from 'react-router-dom'
import { Breadcrumb, Layout, Menu } from 'antd';
import {UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './SandBox.css'

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = [{
  key: '1',
  label: `nav 1`,
}];

const items2: MenuProps['items'] = [{
      key: `sub$1`,
      icon: React.createElement(UserOutlined),
      label: `subnav 1`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = 0 * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    }];


export default function SandBox() {
  return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
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
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
  )
}
