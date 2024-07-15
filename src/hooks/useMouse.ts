import { useCallback, useEffect, useState } from 'react'

//获取鼠标位置（自定义Hook）
export const useMouse = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  // const mouseMoveHandler = (event: MouseEvent) => {
  //   setX(event.clientX)
  //   setY(event.clientY)
  // }
  const mouseMoveHandler = useCallback((event: MouseEvent) => {
    setX(event.clientX)
    setY(event.clientY)
  }, [])
  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)

    //组件销毁时，一定要解绑DOM事件，可能会出现组件内存泄漏问题
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return { x, y }
}
