import React, {useState} from "react";
import {useTodo} from "../context/index.js";



function TodoForm() {

    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()
   const onchlick= (e)=>{
        e.preventDefault()
       if(!todo) return
        addTodo({todo,completed:false})
       setTodo("")
   }
   const onchanges =(e)=>{
        setTodo( e.target.value )
    }
    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={onchanges}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            onClick={onchlick}

            >
                Add

            </button>
        </form>
    );
}

export default TodoForm;

