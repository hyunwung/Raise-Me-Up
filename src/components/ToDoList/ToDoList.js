import React, {useEffect} from 'react';
import ToDoForm from "../ToDo/ToDoForm";

const ToDoList = () => {
    return (
        <div className='todolist'>
            <ToDoForm></ToDoForm>
            {/* <div>{todos}</div>
            {todos.map((todo)=>(
                <ToDoForm
                    id={todo.id}
                    title={todo.content}
                    completed={todo.iscompleted}
                ></ToDoForm>
            ))} */}
        </div>
    )
}

export default ToDoList