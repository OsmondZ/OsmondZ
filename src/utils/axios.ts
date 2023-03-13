import Axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'
import { message } from 'antd'
import { storage } from './storage'

export const axios = Axios.create({
  baseURL: '/api',
})

// 请求拦截器
axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // token的header增加
  const token = storage.getToken()
  if (token)
    config.headers.Authorization = `Bearer ${token}`

  config.headers.apiKey = import.meta.env.VITE_API_KEY
  return config
})

// 相应拦截器
axios.interceptors.response.use((response) => {
  const { data } = response
  if (data.code === 0) {
    return data.data
  }
  else {
    message.error(data.message)
    if (data.code === -666)
      storage.clearToken()

    // @todo 登录过期，清理token 跳转登录
    return Promise.reject(data)
  }
}, (error) => {
  const message = error.response?.data?.message || error.message
  console.error(message)
  return Promise.reject(error)
})
