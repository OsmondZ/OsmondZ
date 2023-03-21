import { BrowserRouter } from 'react-router-dom'
import Router from './routers/router'
import { AuthProvider } from './components/AuthProvider'
import AuthRouter from './components/AuthRouter'
// 入口
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </BrowserRouter>
    </AuthProvider>
  )
}
