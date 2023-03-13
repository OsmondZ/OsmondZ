import { Navigate, useRoutes } from 'react-router-dom'
import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'

const rootRouter = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace={true} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    // 需要权限
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/404/',
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate to="/404" replace={true} />,
  },
]

const Router = () => {
  return useRoutes(rootRouter)
}
export default Router
