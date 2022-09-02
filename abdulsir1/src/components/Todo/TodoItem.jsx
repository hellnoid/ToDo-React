import React from 'react'

export const TodoItem = ({title,status}) => {
  return (
    <div>
        <p>{title}{"----->"}{status?"COMPLETED":"NOT COMPLETED"}</p>
    </div>
  )
}
