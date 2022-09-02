import { useState } from "react";
import {v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/Todo/action";


export const TodoInput=()=>{
const [title,setTitle] = useState("");
const dispatch =useDispatch();

const handleAdd=()=>{
    const payload ={
        title,
        status:false,
        id:uuid(),
    };
   dispatch(addTodo(payload));
}
return (<div>
    <input type="text" placeholder="Add new ToDo's" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <button onClick={handleAdd}>ADD TODOS</button>
</div>)
}