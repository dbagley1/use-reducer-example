import { useContext } from "react";
import { TodoContext } from "./TodoApp";

export default function Todo(props) {
  const { dispatch } = useContext(TodoContext);
  const { todo } = props;
  const { id, title, completed } = todo;

  const handleDelete = () => {
    dispatch({ type: "delete-todo", payload: id });
  };

  const handleComplete = () => {
    dispatch({ type: "toggle-completed", payload: id });
  };

  return (<div style={{ textDecorationLine: completed ? "line-through" : null }}>{title} <button onClick={handleDelete}>Delete</button> <button onClick={handleComplete}>Complete</button></div>);
}
