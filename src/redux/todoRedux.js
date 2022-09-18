import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = process.env.REACT_APP_TODO

// 가져오기.
export const getTodosAsync = createAsyncThunk(
    "todos/getTodosAsync",
    async ()=>{
        const response = await fetch(url+"/api/v1/todos",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
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
        console.log(payload.id,payload.isCompleted)
        const response = await fetch(url+"/api/v1/todos/"+`${payload.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:
                JSON.stringify({
                    id:payload.id,
                    content:payload.content,
                    isCompleted:payload.isCompleted})
        })
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
const initialState = {
    data: [
        {
            createdDate: "2022-09-03",
            modifiedDate: "2022-09-03",
            id: 1,
            content: "응애 ..",
            isCompleted: false
        }
    ]
}
const todoSlice = createSlice({
    name:'todos',
    initialState:[],
    reducers:{},
    extraReducers:{
        [getTodosAsync.pending]:(state,action) => {
            console.log("loading...")
        },
        [getTodosAsync.fulfilled]:(state,action) => {
            console.log("fetching data successfully")
            return action.payload
        },
        [getTodosAsync.rejected]:(state,action) => {
            console.log("data get fail")
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
        [toggleCompleteAsync.pending]:(state,action)=>{
            console.log(action)
            // const index = state.findIndex(
            //     (todo)=>todo.id === action.payload.id
            // )
            // state[index].isCompleted = action.payload.isCompleted;
        },
        [toggleCompleteAsync.rejected]:(state,action)=>{
            console.log(action)
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
    }
})

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions
export default todoSlice.reducer;