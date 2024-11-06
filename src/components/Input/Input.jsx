import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
/* eslint-disable react/prop-types */

const Input = ({ task, setTask, addTask }) => {
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [deadline, setDeadLine] = useState("");
  const [list, setList] = useState("Personal");
  
  // Create a ref for the main div
  const divRef = useRef(null);

  // Function to handle adding a task
  const addThisTask = (e) => {
    if (e.key === "Enter") {
      addTask(deadline, list);
      setIsEditingTask(false);
    }
  };

  // Detect clicks outside of the div
  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsEditingTask(false);
    }
  };

  useEffect(() => {
    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={divRef}  // Attach the ref to this main div
      className="col-7 col-md-5 p-3 shadow rounded d-flex flex-column justify-content-center align-items-start p-2"
      tabIndex={-1}
    >
      <h6 className="text-success text-center">Add New Task</h6>
      <input
        className="mx-1 p-1 ms-1 rounded border w-100"
        style={{ height: "40px" }}
        id="task"
        type="text"
        onKeyUp={addThisTask}
        onFocus={() => setIsEditingTask(true)}
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder="Enter a task"
      />
      
      {isEditingTask && (
        <label className="w-100">
          <span className="text-primary col-4 fw-bold"> Set Deadline</span>{" "}
          &nbsp;
          <input
            className="m-1 p-2 ms-1 rounded border col-7"
            style={{ height: "40px" }}
            type="datetime-local"
            onChange={(e) => setDeadLine(e.target.value)}
            placeholder="Enter a deadline"
          />
        </label>
      )}

      {isEditingTask && (
        <label>
          <span className="text-primary col-4 fw-bold"> Set List</span> &nbsp;
          <select
            className="m-1 p-2 ms-1 rounded border col-7"
            onChange={(e) => setList(e.target.value)}
            value={list}
          >
            <option>Personal</option>
            <option>Professional</option>
            <option>Other</option>
          </select>
        </label>
      )}

      {isEditingTask && (
        <div className="d-flex justify-content-center align-items-center w-100">
          <Button variant="primary" onClick={() => addTask(deadline, list)} className="col-xs-2">
            Add
          </Button>
        </div>
      )}

      {isEditingTask && (
        <div className="d-flex justify-content-end align-items-center w-100">
          <i
            className="fa-solid fa-angle-up"
            onClick={() => {
              setIsEditingTask(false);
            }}
          ></i>
        </div>
      )}
    </div>
  );
};

export default Input;
