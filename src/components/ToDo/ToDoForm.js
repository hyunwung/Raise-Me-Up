import "./ToDoForm.scss";
import {useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getTodosAsync,addTodoAsync,toggleCompleteAsync,deleteTodoAsync} from "../../redux/todoRedux";
import axios from "axios";

function ToDoForm() {
    // redux
    // const dispatch = useDispatch();
    // const todos = useSelector((state) =>state.todos);
    const [todoInput, setTodoInput] = useState(""); // 인풋받는 투두 리스트
    // const [todos,setTodos] = useState(
    //     {content:"",
    //     isCompleted:false,
    //     }
    // )
    const [todos,setTodos] = useState("")
    console.log("이거",todos)
    // 인풋받고 데이터 타겟 지정
    const inputTextHandle = (e)=>{ 
        setTodoInput(e.target.value);
    }

    //클릭시 데이터 제출
    const submitTodo = (e)=>{
        if (todoInput==""){
            alert("Please input your todo item")
        }
        e.preventDefault();
        // dispatch(
        //     addTodoAsync({
        //         content:todoInput
        //     })
        // )
        setTodoInput("")
    }
    
    const deleteClick = (id)=>{
        // dispatch(deleteTodoAsync({ id }));
    }

    // const toggleComplete = (id,isCompleted) =>{
    //     dispatch(toggleCompleteAsync(
    //         {id:id,isCompleted:!isCompleted}
    //     ))
    // }
    const checkComplete = (id,isCompleted) =>{
        todos.find((index)=>{
            if(index.id === id){
                return !index.isCompleted==isCompleted
            }
        })
    }
    useEffect(()=>{
        axios.get('http://localhost:8080/api/v1/todos', {
        })
        .then(function (response) {
            setTodos({...todos,content:response.data.data});
            // setTodos(response.data.data.content)
        })
        .catch(function (error) {
            console.log(error);
        })
    },[])
    // useEffect(()=>{
    //     dispatch(getTodosAsync());
    //     return ()=>{
    //         dispatch(getTodosAsync());
    //     }
    // },[todoInput])
    return (
        <div className="todolist">
            <header>
                <h3>Raise Me Up !</h3>
            </header>
            <form>
                <input value={todoInput} onChange={inputTextHandle} type="text" className="todo-input" />
                <button className="todo-button" type="submit" onClick={submitTodo}>+</button>
            </form>
            <div className="todo-container">
                <ul className="todo-list">
                
                    {todos.map((todo,index)=>(
                        <div key={index} className="todo">{todo.content}
                        {/* <li className={`todo-item ${todo.content[index]["isCompleted"] ? "completed" : ""}`}>{todo.content[index]["content"]}</li>
                            <button onClick={()=>{checkComplete(todo.id,todo.isCompleted)}} className="complete-btn">
                                저장</button>
                            <button onClick={()=>{deleteClick(todo.id)}} className="trash-btn">
                                삭제
                            </button>  */}
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
  
export default ToDoForm;