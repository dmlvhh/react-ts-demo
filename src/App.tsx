import React, { useState } from 'react'
// import List1 from './list1'
function App() {
  // let count = 0 // 普通的js无法触发组件的更新
  const [count, setCount] = useState(0) //useState 可以出发组件的更新
  const add = () => {
    // count++
    setCount(count + 1)
    console.log(count)
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
export default App
