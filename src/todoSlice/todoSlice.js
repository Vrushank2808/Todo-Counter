import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [], 
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                todo: action.payload,
                completed: false,
                id: Date.now()
            });
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        completeTodo: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload);
            state.todos[index].completed = !state.todos[index].completed;
        },
    }
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;