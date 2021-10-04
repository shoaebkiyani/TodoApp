import { useState } from "react";

const AddTodos = ({ todos, addTodo }) => {
  const [newTodoName, setNewTodoName] = useState("");

  const generateNewId = () => {
    return todos.length + 1;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    var newTodos = todos.slice();
    newTodos.push({
      id: generateNewId(),
      name: newTodoName,
      complete: false,
    });

    addTodo(newTodos);

    setNewTodoName("");
  };

  const onInputChange = (event) => {
    setNewTodoName(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="todo-input"
        placeholder="Add new todo"
        value={newTodoName}
        onChange={onInputChange}
        required
      />
      <button className="button-add" type="submit" value="Submit">
        Add
      </button>
    </form>
  );
};

export default AddTodos;
