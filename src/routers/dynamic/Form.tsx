import { FormOutlined } from '@ant-design/icons'
import type { MyRouterObject } from '@/types/router'
import LayoutApp from '@/layout/LayoutApp'

const FormRoute: MyRouterObject[] = [
  {
    path: '/Form',
    meta: { title: 'Form', key: 'form', icon: <FormOutlined />, index: 2 },
    element: <LayoutApp />,
    children: [
      {
        path: 'validate',
        element: <>校验</>,
        meta: { title: 'validate' },
      },
      {
        path: 'step',
        element: <>分布表单</>,
        meta: { title: '分布表单' },
      },
    ],
  },
]
export default FormRoute
