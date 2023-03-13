import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routers/router'
// 入口
export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
