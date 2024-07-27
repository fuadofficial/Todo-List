import { useState, useRef, useEffect } from "react";
import AddItem from "../AddItem/AddItem";
import TodoList from "../TodoList/TodoList";
import "./Home.css";

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const inputRef = useRef(null);

    // Load todos from localStorage on component mount
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    // Save todos to localStorage whenever the todos state changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const addValue = () => {
        if (inputValue !== "") {
            if (editIndex !== null) {
                // Update the existing item
                const updatedTodos = todos.map((todo, index) =>
                    index === editIndex ? { name: inputValue } : todo
                );
                setTodos(updatedTodos);
                setEditIndex(null);  // Reset edit index after updating
            } else {
                // Add a new item
                setTodos([...todos, { name: inputValue }]);
            }
            setInputValue("");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addValue();
        }
    };

    const deleteItem = (index) => {
        setTodos(todos.filter((_, item) => item !== index));
        if (index === editIndex) {
            setEditIndex(null);  // Clear edit index if deleted item was being edited
            setInputValue("");  // Clear input field
        }
    };

    const editItem = (index) => {
        setInputValue(todos[index].name);
        setEditIndex(index);
        inputRef.current.focus();
    };

    return (
        <div className="home-container">
            <div className="todo-list">
                <div className="heading">
                    <h1>MOBILE SHOP</h1>
                </div>
                <div className="add-item">
                    <AddItem
                        handleKeyDown={handleKeyDown}
                        inputValue={inputValue}
                        handleChange={handleChange}
                        addValue={addValue}
                        inputRef={inputRef}
                    />
                </div>
                <div className="todo-list">
                    <TodoList todos={todos} deleteItem={deleteItem} editItem={editItem} />
                </div>
            </div>
        </div>
    );
};

export default Home;
