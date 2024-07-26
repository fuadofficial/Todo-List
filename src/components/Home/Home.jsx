import { useEffect, useRef, useState } from "react";
import AddItem from "../AddItem/AddItem";
import TodoList from "../TodoList/TodoList";
import "./Home.css";

const Home = () => {
    const [inputValue, setInputValue] = useState("");

    const [todos, setTodos] = useState([
        { name: "iPhone 13" },
        { name: "Samsung Galaxy S21" },
        { name: "Google Pixel 6" },
        { name: "OnePlus 9" },
        { name: "Xiaomi Mi 11" },
    ]);

    const handleCange = (event) => {
        setInputValue(event.target.value)
    };

    const addValue = () => {
        if (inputValue !== "") {
            setTodos([...todos, { name: inputValue }]);
            setInputValue("")
        }
    };

    const deleteItem = (index) => {
        setTodos(todos.filter((_, item) => item !== index));
        console.log(index);
    }

    const editItem = (index) => {
        setInputValue(todos[index].name)
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="home-container">
            <div className="todo-list">
                <div className="heading">
                    <h1>MOBILE SHOP</h1>
                </div>
                <div className="add-item">
                    <AddItem inputValue={inputValue} handleCange={handleCange} addValue={addValue} inputRef={inputRef} />
                </div>
                <div className="todo-list">
                    <TodoList todos={todos} deleteItem={deleteItem} editItem={editItem} />
                </div>
            </div>
        </div>
    );
};

export default Home;
