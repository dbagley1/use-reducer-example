import { createContext, useReducer } from "react";
import todoReducer from "./todoReducer";
import TodoList from "./TodoList";
import defaultTodos from "./defaultTodos";
import AddTodoForm from "./AddTodoForm";

export const TodoContext = createContext(null);

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return <div>
    <TodoContext.Provider value={{ todos, dispatch }}>
      <AddTodoForm />
      <TodoList />
    </TodoContext.Provider>
  </div>;
};
