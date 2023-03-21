import { Navigate, useRoutes } from 'react-router-dom'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import type { MyRouterObject } from '@/types/router'
import { normiorizeRoute } from '@/utils'

const dynamicRoutes: MyRouterObject[] = []

export const authRoutes: Record<string, { [key: string]: MyRouterObject[] }>
  = import.meta.glob('./dynamic/*tsx', { eager: true })

Object.keys(authRoutes).forEach((item) => {
  const moudule = authRoutes[item].default.map((route) => {
    route.meta!.auth = true
    route.meta!.index = route.meta!.index || -1
    return route
  })
  dynamicRoutes.push(...moudule)
})

export const authRouters = normiorizeRoute(dynamicRoutes)

export const rootRouter = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace={true} />,
  },
  {
    path: '/login',
    element: <Login />,
    meta: { auth: false, title: 'login', key: 'login' },
  },
  ...authRouters,
  {
    path: '/404',
    element: <NotFound />,
    meta: { auth: false, title: 'Not Found', key: 'not found' },
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
