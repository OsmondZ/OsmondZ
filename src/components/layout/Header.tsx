import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { userInfoApi } from '@/api/user'
import { useAuth } from '@/hooks/useAuth'
import { storage } from '@/utils'
const { Header } = Layout

export const HeaderStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  lineHeight: '64px',
}

const MyHeader = () => {
  const auth = useAuth()
  const token = storage.getToken()
  useEffect(() => {
    if (token && !auth.user._id) {
      userInfoApi().then((res) => {
        auth.login({
          _id: res._id,
          email: res.email,
          token,
        })
      })
    }
  })
  return (
    <Header style={HeaderStyle}>
      <div>欢迎你 {auth.user._id}</div>
    </Header>
  )
}
export default MyHeader
