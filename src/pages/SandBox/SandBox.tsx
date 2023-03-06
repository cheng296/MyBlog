import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd';
import './SandBox.css'
import Headers from '../../layouts/Header';

const { Content } = Layout;


const SandBox: React.FC = () => {
  return (
    <Layout>
      <Headers />
      <Content style={{ padding: '0 50px', height: '90vh' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default SandBox;