import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset } from '../../redux/Counter/action';


export function Counter() {
  const count= useSelector((state)=> state.count.count);
  const dispatch= useDispatch();

let handleAdd=()=>{
        dispatch(increment(7));
}

let handleDecrement=()=>{
  dispatch(decrement(7))
}

let handleReset=()=>{
  dispatch(reset());
}


  return (
    <>
    <h1>Counter is {count}</h1>
    <button onClick={handleAdd}>INC</button>
    <button onClick={handleDecrement}>DEC</button>
    <button onClick={handleReset}>Reset</button>
    </>
  )
}
