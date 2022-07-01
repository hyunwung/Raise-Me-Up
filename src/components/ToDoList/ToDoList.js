import "./ToDoList.scss";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useState,useEffect} from "react";

function ToDoList() {
    const [todos, setTodos] = useState([]); // 저장되는 투두 리스트들
    const [todoInput, setTodoInput] = useState(""); // 인풋받는 투두 리스트

    // 인풋받고 데이터 타겟 지정
    const inputTextHandle = (e)=>{ 
        setTodoInput(e.target.value);
    }
    // 클릭시 데이터 제출
    const submitTodo = (e) =>{ 
        e.preventDefault();
        if (todoInput===""){
            alert("공백은 다메다메~")
            return;
        }
        setTodos([...todos,
            {text: todoInput,completed:false,id:Math.random()*1000}]);
        setTodoInput("");
    };

    // 데이터 베이스 저장
    const saveTodos = () =>{
        localStorage.setItem("todos",JSON.stringify(todos));
    };
    const getTodos=()=>{
        if(localStorage.getItem("todos")===null){
            localStorage.setItem("todos",JSON.stringify([]));
        }else{
            let todolocal = JSON.parse(localStorage.getItem("todos"));
            
            setTodos(todolocal);
        }
    }

    // 유즈 이 팩 트1
    useEffect(() => {
        if(todos.length !==0){
            saveTodos();
        }
    }, [todos]);

    // 유즈 이 팩 트2
    useEffect(() => {
        getTodos();
        }, []);

    return (
        <div>
            <header>
                <h2>Todos App !</h2>
            </header>
            <form>
                <input value={todoInput} onChange={inputTextHandle} type="text" className="todo-input" />
                <button className="todo-button" type="submit" onClick={submitTodo}>
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map((todo)=>(
                        <div key={todo.id} className="todo">
                        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
                            <button onClick={()=>{
                            setTodos(todos.filter((item)=>{
                                if(item.id === todo.id){
                                    return{
                                        ...item, completed: !item.completed
                                    }
                                }
                                return item;
                            }))
                            }} className="complete-btn">
                                <i className="fas fa-check"></i></button>
                            <button onClick={()=>{
                                setTodos(todos.filter((el)=>el.id !== todo.id))
                            }} className="trash-btn">
                                <i className="fas fa-trash"></i>
                            </button> 
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
  
export default ToDoList;