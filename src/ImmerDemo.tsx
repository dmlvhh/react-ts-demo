import React, { FC, useState } from 'react'
import produce from 'immer'
const Demo: FC = () => {
  const [userInfo, setUserInfo] = useState({ name: '王五', age: 20 })
  // const changeAge = () => {
  // 不可变数据 不去修改 state的值，而是要传入一个新的值
  // setUserInfo({
  //   // name: '张三',
  //   ...userInfo,
  //   age: 21,
  // })
  //   setUserInfo(
  //     produce(draft => {
  //       draft.age = 21
  //     })
  //   )
  // }
  const [list, setList] = useState(['x', 'y'])
  const addItem = () => {
    // setList(list.concat('z'))
    // setList([...list, 'z'])
    setList(
      produce(draft => {
        draft.push('z')
      })
    )
  }
  return (
    <div>
      <h2>state 不可变数据</h2>
      {/*<div>{JSON.stringify(userInfo)}</div>*/}
      {/*<button onClick={changeAge}>changeAge</button>*/}
      <div>{JSON.stringify(list)}</div>
      <button onClick={addItem}>addItem</button>
    </div>
  )
}
export default Demo
