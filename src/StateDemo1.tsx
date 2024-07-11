import React, { FC, useState } from 'react'

const Demo: FC = () => {
  // let count = 0 // 普通的js无法触发组件的更新
  const [count, setCount] = useState(0) // useState 可以出发组件的更新
  const [name, setName] = useState('张三') // useState 可以出发组件的更新
  const add = () => {
    // count++
    // setCount(count + 1) // 合并后更新
    // setCount(count + 1)
    // 不会被合并后更新
    setCount(count => count + 1) // 异步更新无法拿到最新的值
    setCount(count => count + 1) // 异步更新无法拿到最新的值
    setCount(count => count + 1)
    console.log('cur count', count)
    // setName('x')
    // console.log(name) // 如果说一个变量 不用于jsx 中显示，那就不要用 setState来管理它，用useRef
  }
  return (
    <>
      {/*<List1 />*/}
      <div>
        <button onClick={add}>add {count}</button>
      </div>
    </>
  )
}
export default Demo
