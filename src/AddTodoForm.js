import { useContext } from "react";
import { TodoContext } from "./TodoApp";

export default function AddTodoForm() {
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch({ type: "add-todo", payload: formData.get('title') });
  };

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
    </form>
  </div>;
}
