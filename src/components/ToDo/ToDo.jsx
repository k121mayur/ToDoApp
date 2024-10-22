import Input from "../Input/Input.jsx";
import List from "../List/List.jsx";
import { Button } from "react-bootstrap";
import { useState } from "react";
import styles from "./ToDo.module.css";




const ToDo = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("persistantTasks")) || []);
  const [task, setTask] = useState("Welcome");
  const addTask = () => {
    if (task === "" || task.trim() === "") {
    alert("Please enter a task");
  } else {
    setTasks([...tasks, task]);
    localStorage.setItem("persistantTasks", JSON.stringify([...tasks, task]));
    setTask("");
  }
  };
  
  return (
    <div className={styles.ToDo}>
      <h1 className="text-primary m-3">To Do App</h1>
      <div>
        <Input task={task} setTask={setTask} addTask={addTask}/>
        <Button variant="primary" onClick={addTask}>Add</Button>
        <Button variant="danger"  className="mx-3" onClick={() => {setTasks([]); localStorage.setItem("persistantTasks", JSON.stringify([]))} }>Reset </Button>

      </div>

      <List tasks={tasks} />
    </div>
  );
};
export default ToDo;
