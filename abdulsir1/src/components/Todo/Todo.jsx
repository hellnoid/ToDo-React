import React from 'react'
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem';
import { useSelector } from 'react-redux';

export function Todo() {
  const todos=useSelector((state)=> state.todo.todo)
  return (
    <div>
        <TodoInput/>
        <br />
        {todos.map((todo)=>(
          <TodoItem key={todo.id}{...todo}/>
        ))}
    </div>
  )
}
