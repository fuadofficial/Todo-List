/* eslint-disable react/prop-types */
import "./TodoList.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoList = ({ todos }) => {

  return (
    <div className="todo-list-container">
      {todos.map((data,index) => {
        return (
          <div className="list" key={index}>
            <div className="data">
              <span>{data.name}</span>
            </div>
            <div className="buttons">
              <button>
                <FaEdit />
              </button>
              <button>
                <MdDelete />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
