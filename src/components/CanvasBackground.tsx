import React, { useEffect, useRef } from 'react'
import type { CircleType } from '@/utils/canvasBall'
import { Circle } from '@/utils/canvasBall'
import './CanvasBackground.css'

const CanvasBackGround = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const currentCirle: CircleType = new Circle(-1, -1, 8)
  useEffect(() => {
    // 画一个球
    const canvas = canvasRef.current as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const w = (canvas.width = window.innerWidth)
    const h = (canvas.height = window.innerHeight)
    const circles: CircleType[] = []
    const draw = () => {
      // 一个球的绘制，x,y,r,color mx,my (随机移动的距离)
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < circles.length; i++) {
        circles[i].move(w, h)
        circles[i].drawCircle(ctx)
        for (let j = i + 1; j < circles.length; j++)
          circles[i].drawLine(ctx, circles[j])
      }
      if (currentCirle.x > 0 && currentCirle.y > 0) {
        currentCirle.drawCircle(ctx)
        for (let z = 0; z < circles.length; z++)
          currentCirle.drawLine(ctx, circles[z])
      }
      window.requestAnimationFrame(draw)
    }
    const init = (num: number) => {
      // 画N个球
      for (let i = 0; i < num; i++) {
        const c: CircleType = new Circle(Math.random() * w, Math.random() * h)
        circles.push(c)
      }
      draw()
    }
    init(100)
  }, [])

  return (
    <canvas
      onMouseMove={(e) => {
        currentCirle.x = e.clientX
        currentCirle.y = e.clientY
      }}
      onMouseOut={() => {
        currentCirle.x = -1
        currentCirle.y = -1
      }}
      ref={canvasRef}
      className="canvas-bg"
    />
  )
}
export default CanvasBackGround
