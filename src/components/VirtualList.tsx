import React, { useEffect, useRef, useState } from 'react'
import VirtualStyle from './virtual.module.css'

interface VirtualProps {
  list: { key: number; text: string }[]
}
const HEIGHT = 30
const VirtualList = (props: VirtualProps) => {
  const { list } = props
  const container = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(0)

  const [visibleData, setVisibleData] = useState<VirtualProps['list']>([])
  const [viewTransform, setViewTransform] = useState('translate3d(0,0,0)')
  useEffect(() => {
    const containerDom = container.current
    const viewHeight = containerDom?.clientHeight || 500 // 视窗高度
    console.log(viewHeight)
    const visibleCount = Math.ceil(viewHeight / HEIGHT) // 视窗内有多少元素
    const end = start + visibleCount
    setVisibleData(list.slice(start, end))
  }, [])

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const scrollTop = e.currentTarget.scrollTop // 滚动的距离
    const containerDom = container.current
    const viewHeight = containerDom?.clientHeight || 500 // 视窗高度
    const start = Math.floor(scrollTop / HEIGHT)
    const end = start + Math.ceil(viewHeight / HEIGHT)
    setVisibleData(list.slice(start, end))
    setStart(start)
    setViewTransform(`translate3d(0,${start * HEIGHT}px,0)`)
  }
  const placeholderHeight = props.list.length * HEIGHT

  return (
    <div
      ref={container}
      className={VirtualStyle.container}
      onScroll={handleScroll}
    >
      <div
        className={VirtualStyle.placeholder}
        style={{ height: placeholderHeight, backgroundColor: '#eee' }}
      />
      <div className={VirtualStyle.list} style={{ transform: viewTransform }}>
        {visibleData.map(i => (
          <div key={i.key} className={VirtualStyle.item}>
            {i.text}
          </div>
        ))}
      </div>
    </div>
  )
}
export default VirtualList
