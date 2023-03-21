import React from 'react'
import { Layout, Space, theme } from 'antd'
import { Outlet } from 'react-router-dom'
import MyHeader, { HeaderStyle } from '@/components/layout/Header'
import SideBar from '@/components/layout/Sidebar'
// im
const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 40,
  color: '#fff',
  lineHeight: '40px',
}
const { Content, Footer } = Layout
const LayoutApp = () => {
  const token = theme.useToken()
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <MyHeader />
        <Layout>
          <SideBar />
          <Layout style={{ padding: '0 24px' }}>
            <Content
              style={{
                padding: 10,
                background: '#eee',
                minHeight: `calc(100vh - ${HeaderStyle.height}px - ${footerStyle.height}px - 0px)`,
              }}
            >
              <Outlet/>
            </Content>
            <Footer style={footerStyle}>
              <a href="">React + Typescript</a>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </Space>
  )
}
export default LayoutApp
