import { Navigate, useLocation } from 'react-router-dom'
import { rootRouter } from '@/routers/router'
import { searchRoute, storage } from '@/utils'
import { useAuth } from '@/hooks/useAuth'
const AuthRouter = ({ children }: { children: JSX.Element }) => {
  const { pathname } = useLocation()
  const token = storage.getToken()
  const auth = useAuth()
  //   @todo
  //   1.找到匹配的路由对象，确认是否需要auth
  //   2.获取用户信息
  const route = searchRoute(pathname, rootRouter)
  if (route.meta?.auth === false)
    return children
  //   need login
  if (!auth.user || !token)
    return <Navigate to="/login" replace={true} />

  return children
}

export default AuthRouter
