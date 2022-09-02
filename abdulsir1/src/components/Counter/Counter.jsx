import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment } from '../../redux/Action';


export function Counter() {
  const count= useSelector((state)=> state.count);
  const dispatch= useDispatch();

let handleAdd=()=>{
        dispatch(increment(7));
}


  return (
    <>
    <h1>Counter is {count}</h1>
    <button onClick={handleAdd}>INC</button>
    <button>DEC</button>
    </>
  )
}
