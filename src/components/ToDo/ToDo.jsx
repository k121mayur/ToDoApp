import Input from "../Input/Input.jsx";
import List from "../List/List.jsx";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "./ToDo.module.css";




const ToDo = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("persistantTasks")) || []);
  const [task, setTask] = useState("");
  const addTask = () => {
    if (task === "" || task.trim() === "") {
    alert("Please enter a task");
  } else {
    setTasks([...tasks, {task: task, markedDone: false}]);
    localStorage.setItem("persistantTasks", JSON.stringify([...tasks, {task: task, markedDone: false}]));
    setTask("");
  }
  };

  useEffect(() => {
    localStorage.setItem("persistantTasks", JSON.stringify(tasks));
  }, [tasks]);
  
  return (
    <div className={`${styles.ToDo} d-flex flex-column align-items-center justify-content-center`}>
      <h1 className="text-primary m-3 my-5">To Do App</h1>
      <div className="col-sm-11 col-xs-11 d-flex justify-content-center align-items-center" style={{width: "80%"}}>
        <Input task={task} setTask={setTask} addTask={addTask} style={{width: "60%"}} />
        <Button variant="primary" onClick={addTask} className="col-xs-2">Add</Button>
        <Button variant="danger"  className="mx-1 col-xs-2" onClick={() => {setTasks([]); localStorage.setItem("persistantTasks", JSON.stringify([]))} }>Reset </Button>

      </div>

      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
export default ToDo;
