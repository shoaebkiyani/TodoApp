const Todos = ({ todo, onClick, onRemoveClick }) => {
  let color;
  let success;

  if (todo.complete === true) {
    color = "lightgreen";
    success = "green";
  } else {
    color = "pink";
  }

  return (
    <div>
      <div
        className="list-item"
        key={todo.id}
        style={{ backgroundColor: color }}
      >
        {todo.name}
        <button
          className="button-complete"
          key={todo.id}
          style={{ color: success }}
          onClick={() => onClick(todo.id)}
        >
          <i className="fa fa-check-circle"></i>
        </button>
        <button
          className="button-delete"
          onClick={() => onRemoveClick(todo.id)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todos;
