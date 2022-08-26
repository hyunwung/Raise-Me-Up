import "./ToDoForm.scss";
import {useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getTodosAsync,addTodoAsync,toggleCompleteAsync,deleteTodoAsync} from "../../redux/todoRedux";

function ToDoForm() {
    const [todoInput,setTodoInput] = useState("")
    const [check, setCheck] = useState(false)
    // redux
    const dispatch = useDispatch();
    const todos = useSelector((state) =>state.todos);
    // 인풋받고 데이터 타겟 지정
    const inputTextHandle = (e)=>{ 
        setTodoInput(e.target.value);
    }

    //클릭시 데이터 제출
    const submitTodo = (e)=>{
        e.preventDefault();
        if (todoInput===""){
            alert("Please input your todo item")
        }
        dispatch(
            addTodoAsync({
                content:todoInput
            })
        )
        dispatch(getTodosAsync());
        setTodoInput("")
        setCheck(!check)
    }
    
    const deleteClick = (id)=>{
        dispatch(deleteTodoAsync({ id }));
    }
    // const toggleComplete = (id,isCompleted) =>{
    //     dispatch(toggleCompleteAsync(
    //         {id:id,isCompleted:!isCompleted}
    //     ))
    // }
    const checkComplete = (ids,isCompleteds,contents) =>{
        dispatch(toggleCompleteAsync({id:ids,isCompleted:!isCompleteds,content:contents}))
        // todos.find((index)=>{
        //     if(index.id === id){
        //         return !index.isCompleted===isCompleted
        //     }
        // })
    }
    useEffect(()=>{
        dispatch(getTodosAsync());
    },[])
    return (
        <div className="todolist">
            <form className="todo-form">
                <input value={todoInput} onChange={inputTextHandle} type="text" className="todo-input"/>
                <button className="todo-button" type="submit" onClick={submitTodo}>+</button>
            </form>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map((todo,index)=>(
                        <div key={index} className="todo">
                        <li className={`todo-item ${todo.isCompleted ? " completed" : ""}`}>{todo.content}</li>
                            <button onClick={()=>{checkComplete(todo.id,!todo.isCompleted,todo.content)}} className="complete-btn">
                                완료</button>
                            <button onClick={()=>{deleteClick(todo.id)}} className="trash-btn">
                                삭제
                            </button> 
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
  
export default ToDoForm;