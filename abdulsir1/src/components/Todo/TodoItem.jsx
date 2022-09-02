import React from 'react'
import { useDispatch } from 'react-redux'
import { del } from '../../redux/Todo/action';


export const TodoItem = ({title,status,id}) => {
  const dispatch =useDispatch();
  const handleDelete=()=>{
      dispatch(del(id))
  }
  return (
    <div>
        <p>{title}{"----->"}{status?"COMPLETED":"NOT COMPLETED"}</p>
        <button onClick={handleDelete}> Delete</button>
    </div>
  )
}
