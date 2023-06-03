import { useContext } from "react";
import { TodoContext } from "./TodoApp";
import Todo from "./Todo";

export default function TodoList(props) {
  const { todos } = useContext(TodoContext);
  return (<ul>
    {/* {JSON.stringify(todos)} */}
    {todos.map(todo => <li key={todo.id}>{<Todo todo={todo} />}</li>)}
  </ul>);
}
