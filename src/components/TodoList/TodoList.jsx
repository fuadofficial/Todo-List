import "./TodoList.css";

const TodoList = () => {
  return (
    <div className="todo-list-container">
      <div className="list">
        <div className="data">
          <ul>
            <li>data</li>
          </ul>
        </div>
        <div className="buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
