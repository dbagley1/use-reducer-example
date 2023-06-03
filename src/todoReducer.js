import defaultTodos from "./defaultTodos";

export default function todoReducer(todos = defaultTodos, action) {
  switch (action.type) {
    case 'add-todo':
      const newTodo = { id: Date.now(), title: action.payload, completed: false };
      return [...todos, newTodo];

    case 'delete-todo':
      return todos.filter(todo => todo.id !== action.payload);

    case 'toggle-completed':
      let newTodos = [...todos];
      let selectTodo = newTodos.find(todo => todo.id === action.payload);
      selectTodo.completed = !selectTodo.completed;
      return newTodos;

    default:
      return todos;
  }
}
