/* eslint-disable react/prop-types */
import "./AddItem.css";

const AddItem = ({ handleCange, addValue, inputValue,inputRef }) => {

  return (
    <div className="add-item-container">
      <input ref={inputRef} value={inputValue} onChange={handleCange} type="text" placeholder="add your mobile..." />
      <button onClick={addValue}>Add</button>
    </div>
  );
};

export default AddItem;
