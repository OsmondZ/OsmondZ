import { resolvePath } from 'react-router-dom'
import type { MyRouterObject } from '@/types/router'

export function getOpenkeys(path: string): string[] {
  let i = 1
  const arr: string[] = []
  while (true) {
    i = path.indexOf('/', i)
    if (i === -1)
      break

    arr.push(path.slice(0, i))
    i = path.indexOf('/', i) + 1
  }
  return arr
}
export function searchRoute(
  pathname: string,
  routes: MyRouterObject[],
): MyRouterObject {
  let result: MyRouterObject = {}
  for (const route of routes) {
    if (route.path === pathname)
      return route

    if (route.children) {
      const res = searchRoute(pathname, route.children)
      if (Object.keys(res).length)
        result = res
    }
  }
  return result
}

export function normiorizeRoute(
  routes: MyRouterObject[],
  isSort = true,
): MyRouterObject[] {
  const result: MyRouterObject[] = []
  for (const route of routes) {
    if (route.children) {
      route.children.forEach((child) => {
        child.path = resolvePath(child.path!, route.path).pathname
      })
      result.push({
        ...route,
        children: normiorizeRoute(route.children, false),
      })
    }
    else {
      result.push(route)
    }
  }
  if (isSort) {
    result.sort((a, b) => {
      return (a.meta?.index || 0) - (b.meta?.index || 0)
    })
  }
  return result
}

export * from './axios'
export * from './canvasBall'
export * from './storage'
