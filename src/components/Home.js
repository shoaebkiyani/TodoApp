import { useState } from "react";
import AddTodos from "../components/AddTodos";
import TodoList from "../components/TodoList";

// Get TodoList from LocalStorage
// const getTodoList = () => {
//   return JSON.parse(localStorage.getItem("lists"));
// };

const Home = () => {
  const [todos, setToDos] = useState([
    { id: 1, name: "Go to the supermarket", complete: false },
    { id: 2, name: "Call Alice", complete: false },
    { id: 3, name: "Ask Alice to call Bob", complete: false },
    { id: 4, name: "Do the dishes", complete: false },
    { id: 5, name: "Change car tyres", complete: false },
  ]);
  // const [todos, setToDos] = useState(getTodoList());

  // Add Single Todo in a list
  const addTodo = (newTodos) => {
    setToDos(newTodos);
  };

  // Check Status of Todo
  const onClick = (id) => {
    var todoItems = todos.slice();
    todoItems.forEach((items) => {
      if (items.id === id) {
        var newComplete = !items.complete;
        items.complete = newComplete;
      }
    });
    setToDos(todoItems);
  };

  // Remove Todo from list
  const onRemoveClick = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setToDos(newTodo);
  };

  //Add Todo to a local storage
  // useEffect(() => {
  //   localStorage.setItem("lists", JSON.stringify(todos));
  // }, [todos]);

  return (
    <div>
      <AddTodos todos={todos} addTodo={addTodo} />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          onClick={onClick}
          onRemoveClick={onRemoveClick}
        />
      ) : (
        <div className="empty-list">
          <h3>No Todos in the list</h3>
        </div>
      )}
    </div>
  );
};

export default Home;
