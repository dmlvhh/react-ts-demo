import React, { FC, useState } from 'react'
import './List1.css'
import QuestionCard from './components/QuestionCard'

const List2: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])
  const add = () => {
    const r = Math.random().toString().slice(-3)
    setQuestionList(
      questionList.concat({
        id: 'q5' + r,
        title: '问卷5' + r,
        isPublished: false,
      })
    )
  }
  const publishQuestion = (id: string) => {
    setQuestionList(
      questionList.map(q => {
        if (q.id !== id) return q
        return {
          ...q,
          isPublished: true,
        }
      })
    )
  }
  const deleteQuestion = (id: string) => {
    setQuestionList(
      questionList.filter(q => {
        return q.id !== id
      })
    )
  }
  return (
    <div>
      <h1>问卷列表2</h1>
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
