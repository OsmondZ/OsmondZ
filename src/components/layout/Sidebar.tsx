import { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { authRouters } from '@/routers/router'
import { getOpenkeys } from '@/utils'
const { Sider } = Layout

// [/dashboard, /dashboard/index]
const SideBar = () => {
  const { pathname } = useLocation()
  // c
  const navigate = useNavigate()
  const [openKeys, setOpenKeys] = useState<string[]>(getOpenkeys(pathname))

  useEffect(() => {
    setOpenKeys(getOpenkeys(pathname))
  }, [pathname])

  const items: MenuProps['items'] = authRouters.map((root, i) => {
    const key = root.path || String(i)
    return {
      key,
      icon: root.meta?.icon,
      label: root.meta?.title,
      children: root.children?.map((child, j) => {
        // 先知考虑两层菜单
        // const sunKey
        return {
          key: child.path,
          label: child.meta?.title,
        }
      }),
    }
  })
  const handleClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }
  const handleOpenChange: MenuProps['onOpenChange'] = (keys) => {
    setOpenKeys(keys)
  }
  return (
    <Sider>
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        style={{ height: '100%' }}
        openKeys={openKeys}
        items={items}
        onClick={handleClick}
        onOpenChange={handleOpenChange}
      />
    </Sider>
  )
}

export default SideBar
