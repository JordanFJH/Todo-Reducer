export default function reducer(state, action) {
  let newTodos;
  console.log(action);
  console.log(action.payload);
  switch (action.type) {
    case "ADD_TODO":
      let item = {
        text: action.payload,
        completed: false,
        id: crypto.randomUUID(),
      };

      newTodos = [...state, item];
      return newTodos;
    case "DELETE_TODO":
      newTodos = state.filter((item) => item.id !== action.payload);
      return newTodos;
    case "COMPLETE_TODO":
      newTodos = state.map((item) =>
        item.id === action.payload ? { ...item, completed: !item.completed } : item
      );
      return newTodos;
    default:
      return state;
  }
}
