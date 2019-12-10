import React, { useState } from "react";
import "./clickerBox.css";

const ClickerBox = () => {
  const [count, setCount] = useState(0);

  const handleClick = e => {
    if (e.target.id === "minus" || e.target.id === "minus-icon") {
      if (count > 0) setCount(count - 1);
    } else if (e.target.id === "add" || e.target.id === "add-icon") {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="clicker-box">
      <div className="number"> {count} </div>
      <div className="buttons">
        <button
          onClick={handleClick}
          id="minus"
          className="ui negative basic button"
        >
          <i id="minus-icon" className="minus square outline icon"></i>
        </button>
        <button
          onClick={handleClick}
          id="reset"
          className="ui yellow basic button"
        >
          <i className="undo icon"></i>
        </button>
        <button
          onClick={handleClick}
          id="add"
          className="ui primary basic button"
        >
          <i id="add-icon" className="plus square outline icon"></i>
        </button>
      </div>
    </div>
  );
};

export default ClickerBox;
