import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd';
import './index.css'
import Headers from '../../layouts/Header';

const { Content } = Layout;


const SandBox: React.FC = () => {
  return (
    <Layout>
      <Headers />
      <Content style={{ padding: '0px 50px'}}>
        <Layout className="site-layout-background" style={{ padding: '24px 0 ' }}>
          <Content style={{ padding: '0px 24px',overflow:'auto'}}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default SandBox;