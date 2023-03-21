import { useState } from 'react'
import { Button, Form, Input, Space, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import SparkMd5 from 'spark-md5'
import type { LoginData } from '@/types/user'
import CanvasBackGround from '@/components/CanvasBackground'
import './Login.css'
import { userLoginApi } from '@/api/user'
import { storage } from '@/utils'
import { useAuth } from '@/hooks/useAuth'
const Login = () => {
  const [captcha, setCaptcha] = useState('/api/captcha')
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const auth = useAuth()
  const onFinish = async (values: LoginData) => {
    const obj: LoginData = {
      email: values.email,
      passwd: SparkMd5.hash(values.passwd),
      captcha: values.captcha,
    }
    // axios
    //   .post("/api/user/login", obj, {
    //     headers: {
    //       apiKey: "dasheng123",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
    const ret = await userLoginApi(obj)
    if (ret.token) {
      storage.setToken(ret.token)
      message.success('登录成功')
      navigate('/dashboard')
      auth.login(ret)
      // 1. 管理token
      // 2. 弹出提醒
      // 3. 跳转到dashboard
      // 4. 管理一下登录用户信息
    }
  }
  const handleCaptcha = () => {
    setCaptcha(`/api/captcha?${Math.random()}`)
  }

  const handleHi = () => {
    fetch('/api/user/hi', {
      headers: {
        apiKey: 'dasheng123',
      },
    })
      .then(res => res.json())
      .then(() => {})
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-title">React + Typescript</div>
        <Form
          form={form}
          name="login"
          labelCol={{ span: 5 }}
          onFinish={onFinish}
          size="large"
          autoComplete="false"
          initialValues={{
            email: '316783812@qq.com',
            passwd: '316783812',
          }}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: '请输入您的邮箱' },
              { type: 'email', message: '请输入正确的邮箱格式' },
            ]}
          >
            <Input placeholder="邮箱" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="passwd"
            rules={[
              { required: true, message: '请输入密码' },
              { min: 1, max: 20, message: '请输入长度是1-20的密码' },
            ]}
          >
            <Input.Password placeholder="密码" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item name="captcha">
            <Space>
              <Input placeholder="验证码" />
              <img src={captcha} onClick={handleCaptcha} alt="" />
            </Space>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button onClick={handleHi}>测试hi</Button>
          </Form.Item>
        </Form>
      </div>
      <CanvasBackGround />
    </div>
  )
}

export default Login
