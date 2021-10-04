import Todos from "../components/Todos";

const TodoList = ({ todos, onClick, onRemoveClick }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todos
          key={todo.id}
          todo={todo}
          onClick={onClick}
          onRemoveClick={onRemoveClick}
        />
      ))}
    </div>
  );
};

export default TodoList;
