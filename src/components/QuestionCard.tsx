import classnames from 'classnames'
import React, { FC, useEffect } from 'react'
// import './QuestionCard.css'
import styles from './QuestionCard.module.scss'

// ts 自定义类型
type PropsType = {
  id: string
  title: string
  isPublished: boolean
  deleteQuestion: (id: string) => void
  publishQuestion: (id: string) => void
}
const QuestionCard: FC<PropsType> = props => {
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props
  const publish = (id: string) => {
    publishQuestion(id)
  }
  const del = (id: string) => {
    deleteQuestion(id)
  }
  // useEffect(() => {
  //   console.log('questionCard mounted')
  //   return () => {
  //     console.log('questionCard unmounted', id) // 销毁
  //   }
  // }, [])
  // let itemClassName = 'list-item'
  // if (isPublished) itemClassName += ' published'

  // const itemClassName = classnames('list-item', { published: isPublished })
  // const itemClassName = classnames({
  //   'list-item': true,
  //   published: isPublished,
  // })
  const listItemClass = styles['list-item']
  const publishedClass = styles.published
  const itemClassName = classnames({
    [listItemClass]: true,
    [publishedClass]: isPublished,
  })
  return (
    <div key={id} className={itemClassName}>
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? <span className={styles['published-span']}>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button
        onClick={() => {
          publish(id)
        }}
      >
        发布问卷
      </button>
      &nbsp;
      <button
        onClick={() => {
          del(id)
        }}
      >
        删除
      </button>
    </div>
  )
}

export default QuestionCard
