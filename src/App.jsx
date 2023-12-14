import "./App.css";
import { useState, useReducer } from "react";
import TodoList from "./components/TodoList";
import reducer from './reducer'
import { useDispatch, useSelector  } from "react-redux";
import { addTodo } from "./todoSlice";


// let key = import.meta.env.VITE_KEY

export default function App() {

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // console.log(test);

  // const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");
  const [listType, setListType] = useState("all");

  function addToList() {
    dispatch(addTodo(input));
    // dispatch({ type: 'ADD_TODO', payload: input })
    setInput("");
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  function deleteTodo(id) {
    dispatch({ type: "DELETE_TODO", payload: id })
    // let newTodos = todos.filter((item) => item.id !== id);
    // setTodos(newTodos);
  }

  function completeTodo(id) {
    dispatch({ type: "COMPLETE_TODO", payload: id})

    // let newTodos = todos.map((item) =>
    //   item.id === id ? { ...item, completed: !item.completed } : item
    // );
    // setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todos ({listType})</h1>

      <TodoList
        // todos={todos}
        listType={listType}
        // completeTodo={completeTodo}
        // deleteTodo={deleteTodo}
      />

      <input value={input} onChange={handleChange} />
      <button onClick={addToList}>Submit</button>

      <br />
      <br />

      <button onClick={() => setListType("all")}>All</button>
      <button onClick={() => setListType("complete")}>Completed</button>
      <button onClick={() => setListType("incomplete")}>Incomplete</button>
    </div>
  );
}
