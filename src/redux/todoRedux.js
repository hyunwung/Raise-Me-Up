import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let url = "http://localhost:8080"
// 가져오기.
export const getTodosAsync = createAsyncThunk(
    "todos/getTodosAsync",
    async ()=>{
        const response = await fetch(url+"/api/v1/todos")
        if(response.ok){
            const todos = await response.json();
            return todos.data
            // return {todos}
        }
})
// 보내기
export const addTodoAsync = createAsyncThunk("todos/addTodoAsync",
    async (payload) =>{
        const response = await fetch(url+"/api/v1/todos",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({content:payload.content})
        })
        if (response.ok){
            const todo = await response.json();
            return { todo }
        }
})
// 완료 표시
export const toggleCompleteAsync = createAsyncThunk("todos/toggleCompleteAsync",
    async(payload)=>{
        const response = await fetch(url+"/api/v1/todos/"+`${payload.id}`,{
            method:"PATCH",
            body:{
                content:payload.content,
                isCompleted:payload.isCompleted,
            },
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(response)
        if (response.ok){
            
            const todo = await response.json();
            return {todo}
            // return { id:todo.id, iscompleted:todo.isCompleted }
        }
})
// 삭제
export const deleteTodoAsync = createAsyncThunk(
	'todos/deleteTodoAsync',
	async (payload) => {
		const response = await fetch(url+"/api/v1/todos/"+`${payload.id}`, {
			method: 'DELETE',
		});
		if (response.ok) {
			return { id: payload.id };
		}
	}
);
const todoSlice = createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        // getTodo:(state,action)=>{
        //     state.todo = true;
        // },
        // postTodo:(state,action)=>{
        //     state.todo = false
        // }
    },
    extraReducers:{
        [getTodosAsync.fulfilled]:(state,action) => {
            console.log("fetching data successfully")
            return action.payload
            // state = action.payload
            // return action.payload.todos
        },
        [addTodoAsync.fulfilled]:(state,action)=>{
            console.log("추가요",action.payload)
            // state.push(action.payload.todo);
        },
        [toggleCompleteAsync.fulfilled]:(state,action)=>{
            console.log(action)
            // const index = state.findIndex(
            //     (todo)=>todo.id === action.payload.id
            // )
            // state[index].isCompleted = action.payload.isCompleted;
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
    }
})

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions
export default todoSlice.reducer;