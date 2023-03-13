import type React from 'react'

export interface MetaObject {
  auth?: boolean
  title?: string
  key?: string
  icon?: JSX.Element
  index?: number // 排序的优先级
}

export interface MyRouterObject {
  element?: React.ReactNode
  path?: string
  meta?: MetaObject
  children?: MyRouterObject[]
}
