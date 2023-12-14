import {  createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            console.log("In add todo")
            console.log(state, action)
            let newTodo = {
                text: action.payload,
                completed: false,
                id: crypto.randomUUID(),
              };
            state.push(newTodo);
        },
        deleteTodo: (state, action) => {
            console.log(action, state)
            // let index = state.findIndex((todo) => todo.id === action.payload)
            // state.splice(index, 1);

            // - SECOND METHOD -

            return state.filter((item) => item.id !== action.payload)
        },
        completeTodo: (state, action) => {
            console.log(action);
            let index = state.findIndex((todo) => todo.id === action.payload)
            state[index].completed = !state[index].completed
        }
    }
})

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer;