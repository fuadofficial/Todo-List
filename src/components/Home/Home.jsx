import { useState } from "react";
import AddItem from "../AddItem/AddItem";
import TodoList from "../TodoList/TodoList";
import "./Home.css";

const Home = () => {
  const [todos, setTodos] = useState([
    { name: "iPhone 13" },
    {  name: "Samsung Galaxy S21" },
    {  name: "Google Pixel 6" },
    {  name: "OnePlus 9" },
    {  name: "Xiaomi Mi 11" },
  ]);

  const [inputValue, setinputValue] = useState("");

  const handleCange = (event) => {
    const newValue = event.target.value;
    setinputValue(newValue)
  };

  const addValue=()=>{
     setTodos(inputValue)
  }

  return (
    <div className="home-container">
      <div className="heading">
        <h1>MOBILE SHOP</h1>
      </div>
      <div className="add-item">
        <AddItem handleCange={handleCange} addValue={addValue} />
      </div>
      <div className="todo-list">
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default Home;
