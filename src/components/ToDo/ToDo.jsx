import Input from "../Input/Input.jsx";
import List from "../List/List.jsx";
import { Button } from "react-bootstrap";
import { useState } from "react";
import styles from "./ToDo.module.css";

const ToDo = () => {
  const [tasks, setTasks] = useState(["t1", "t2", "t3"]);
  const [task, setTask] = useState("Welcome");
  return (
    <div className={styles.ToDo}>
      <h1 className="text-primary m-3">To Do App</h1>
      <div>
        <Input task={task} setTask={setTask}/>
        <Button variant="primary" onClick={() => setTasks([...tasks, task])}>Add</Button>
      </div>

      <List tasks={tasks} />
    </div>
  );
};

export default ToDo;
