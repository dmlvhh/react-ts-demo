import React, { FC, useRef } from 'react'

// const Demo: FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null)
//
//   const selectInput = () => {
//     const inputElem = inputRef.current
//     if (inputElem) inputElem.select() // DOM节点，DOM操作api
//   }
//   return (
//     <div>
//       <input ref={inputRef} defaultValue="hello world" />
//       <button onClick={selectInput}>选中 input</button>
//     </div>
//   )
// }
const Demo: FC = () => {
  const nameRef = useRef('张三')
  const changeName = () => {
    nameRef.current = '王五' // 修改ref值，不会触发rerender（state修改会触发组件rerender）
    console.log(nameRef.current)
  }

  return (
    <>
      <p>name {nameRef.current}</p>
      <div>
        <button onClick={changeName}>change name</button>
      </div>
    </>
  )
}
export default Demo
