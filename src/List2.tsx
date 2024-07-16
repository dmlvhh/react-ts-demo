import React, { FC, useEffect, useState } from 'react'
// import './List1.css'
import QuestionCard from './components/QuestionCard'
import produce from 'immer'
import styles from './List2.module.css'
const List2: FC = () => {
  // console.log('加载ajax请求')
  useEffect(() => {
    console.log('加载ajax请求')
    return () => {
      console.log('销毁')
    }
  }, [])
  // const [count, setCount] = useState(0)
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])
  // useEffect(() => {
  //   console.log('questionList changed')
  // }, [questionList])
  // useEffect(() => {
  //   console.log('count changed')
  // }, [count, questionList])
  const add = () => {
    const r = Math.random().toString().slice(-3)
    // setQuestionList(
    //   questionList.concat({
    //     id: 'q5' + r,
    //     title: '问卷5' + r,
    //     isPublished: false,
    //   })
    // )
    setQuestionList(
      produce(draft => {
        draft.push({
          id: 'q5' + r,
          title: '问卷5' + r,
          isPublished: false,
        })
      })
    )
  }
  const deleteQuestion = (id: string) => {
    // setQuestionList(
    //   questionList.filter(q => {
    //     return q.id !== id
    //   })
    // )
    setQuestionList(
      produce(draft => {
        const index = draft.findIndex(q => q.id === id)
        draft.splice(index, 1)
      })
    )
  }
  const publishQuestion = (id: string) => {
    // setQuestionList(
    //   questionList.map(q => {
    //     if (q.id !== id) return q
    //     return {
    //       ...q,
    //       isPublished: true,
    //     }
    //   })
    // )
    setQuestionList(
      produce(draft => {
        const q = draft.find(item => item.id === id)
        if (q) q.isPublished = true
      })
    )
  }

  return (
    <div>
      <h1>问卷列表2</h1>
      <div className={styles['list-item']}>list-item</div>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              deleteQuestion={deleteQuestion}
              publishQuestion={publishQuestion}
            />
          )
        })}
      </div>
      <div>
        <button onClick={add}>新增问卷</button>
      </div>
    </div>
  )
}

export default List2
