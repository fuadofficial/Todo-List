import AddItem from "../AddItem/AddItem";
import TodoList from "../TodoList/TodoList";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="heading">
        <h1>TODO LIST</h1>
      </div>
      <div className="add-item">
        <AddItem />
      </div>
      <div className="todo-list">
        <TodoList />
      </div>
    </div>
  );
};

export default Home;