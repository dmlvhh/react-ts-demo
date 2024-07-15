import React, { FC, useEffect, useRef, useState } from 'react'

const Demo: FC = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  useEffect(() => {
    countRef.current = count
  }, [count])

  function add() {
    setCount(count + 1)
  }
  function alertFn() {
    setTimeout(() => {
      // alert(count) //count值类型
      alert(countRef.current) //ref引用类型
    }, 3000)
  }

  return (
    <>
      <p>闭包陷阱</p>
      <div>
        <span>{count}</span>
        <button onClick={add}>add</button>
        <button onClick={alertFn}>alert</button>
      </div>
    </>
  )
}

export default Demo
