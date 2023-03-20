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
      <Content style={{ padding: '0px 3vw',  }}>
        <Layout className="site-layout-background" style={{ padding: '3vh 0' }}>
          <Content style={{ padding: '0 2vw' ,overflow:'auto'}}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default SandBox;