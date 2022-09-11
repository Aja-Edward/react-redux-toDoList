import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        clearTodoList: (state) => {
            state.todoList = [];
        },
        removeTodoList: (state, action) => {
            const itemId = action.payload
            state.todoList = state.todoList.filter((item) =>
                item.id !== itemId);
            console.log(action);
        },

        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        setCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    if (item.done === true) {
                        item.done = false
                    } else {
                        item.done = true
                    }
                }
            })
        }
    }
});

export const { saveTodo, setCheck, clearTodoList, removeTodoList } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer


