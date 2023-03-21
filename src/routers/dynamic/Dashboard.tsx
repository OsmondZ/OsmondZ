import { DashOutlined } from '@ant-design/icons'
import type { MyRouterObject } from '@/types/router'
import LayoutApp from '@/layout/LayoutApp'
import Dashboard from '@/pages/Dashboard'
import DataRender from '@/components/DataRender'
const DashboardRoute: MyRouterObject[] = [
  {
    path: '/dashboard',
    meta: {
      title: 'Dashboard',
      key: 'dashboard',
      icon: <DashOutlined />,
      index: 1,
    },
    element: <LayoutApp />,
    children: [
      {
        path: 'index',
        element: <Dashboard />,
        meta: { title: 'Dashboard' },
      },
      {
        path: '/dashboard/upload',
        element: <>大文件上传</>,
        meta: { title: '大文件上传' },
      },
      {
        path: '/dashboard/data-render',
        element: <DataRender />,
        meta: { title: '大数据渲染' },
      },
    ],
  },
]
export default DashboardRoute
