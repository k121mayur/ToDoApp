import Input from "../Input/Input.jsx";
import List from "../List/List.jsx";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "./ToDo.module.css";
import { Modal } from "react-bootstrap";
import {Routes, Route} from "react-router-dom";


  const ToDo = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("persistantTasks")) || {
      Personal : [],
      Professional : [],
      Other : [],
    });
  const [task, setTask] = useState("");

  const [showModalDelete, setShowModalDelete] = useState(false);

  const toggleModalDelete = () => setShowModalDelete(!showModalDelete);



  

  const addTask = (deadline, list) => {
    if (task === "" || task.trim() === "") {
      alert("Please enter a task");
    } else {
      let temp_tasks = { Personal: [...tasks.Personal], Professional: [...tasks.Professional], Other: [...tasks.Other] };
      temp_tasks[list].push({ name: task, markedDone: false, isEditing: false, deadline: deadline, list: list });
      setTasks(temp_tasks);
      setTask("");
    }
  };

  useEffect(() => {
    localStorage.setItem("persistantTasks", JSON.stringify(tasks));
  }, [tasks]);

  // CRUD Functions

  const arrowHandeler = (list, source, destination) => {
    const newTasks = {Personal: [...tasks.Personal], Professional: [...tasks.Professional], Other: [...tasks.Other] };
    [newTasks[list][source], newTasks[list][destination]] = [
      newTasks[list][destination],
      newTasks[list][source],
    ];
    setTasks(newTasks);
  };

  const stateHandeler = (list, index) => {
    const temp_tasks = {Personal: [...tasks.Personal], Professional: [...tasks.Professional], Other: [...tasks.Other] };
    const updatedTask = { ...temp_tasks[list][index] };
    updatedTask.markedDone = !updatedTask.markedDone;
    temp_tasks[list][index] = updatedTask;
    setTasks(temp_tasks);
  };

  const deleteHandler = (list, index) => {
    const updatedTasks ={Personal: [...tasks.Personal], Professional: [...tasks.Professional], Other: [...tasks.Other] };
    updatedTasks[list].splice(index, 1);
    setTasks(updatedTasks);
  };

  const setTaskHandler = (list, index, v) => {
    let temp_tasks ={Personal: [...tasks.Personal], Professional: [...tasks.Professional], Other: [...tasks.Other] };
    temp_tasks[list][index].name = v;
    setTasks(temp_tasks);
  };

  const setEditTaskHandeler = (list, index) => {
    const temp_tasks = {Personal: [...tasks.Personal], Professional: [...tasks.Professional], Other: [...tasks.Other] };
    temp_tasks[list][index].isEditing = !temp_tasks[list][index].isEditing;
    setTasks(temp_tasks);
  };

  return (
    <div
      className={`${styles.ToDo} d-flex flex-column w-100 align-items-center justify-content-center`}
    >
      <div
        className="col-sm-11 col-xs-11 d-flex flex-column justify-content-center align-items-center mt-3"
        style={{ width: "90%" }}
      >
        <Input
          task={task}
          setTask={setTask}
          addTask={addTask}
          style={{ width: "60%" }}
        />
      
        <div className="d-flex justify-content-center align-items-center flex-row mt-3">
          
          <Button
                  id="reset-btn"
                  variant="danger"
                  className={`mx-1 col-xs-2 ${styles.resetBtn}`}
                  onClick={() => {
                    toggleModalDelete();
                  }}
                >
                  Reset{" "}
                </Button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<List
          name="Personal"
          tasks={tasks}
          setTasks={setTasks}
          arrowHandeler={arrowHandeler}
          stateHandeler={stateHandeler}
          deleteHandler={deleteHandler}
          setTaskHandler={setTaskHandler}
          setEditTaskHandeler={setEditTaskHandeler}
        />} />

        <Route path="/professional" element={<List
          name="Professional"
          tasks={tasks}
          setTasks={setTasks}
          arrowHandeler={arrowHandeler}
          stateHandeler={stateHandeler}
          deleteHandler={deleteHandler}
          setTaskHandler={setTaskHandler}
          setEditTaskHandeler={setEditTaskHandeler}
        />} />

        <Route path="/other" element={<List
          name="Other"
          tasks={tasks}
          setTasks={setTasks}
          arrowHandeler={arrowHandeler}
          stateHandeler={stateHandeler}
          deleteHandler={deleteHandler}
          setTaskHandler={setTaskHandler}
          setEditTaskHandeler={setEditTaskHandeler}
        />} />
        
      </Routes>


      

      <Modal show={showModalDelete} onHide={toggleModalDelete}>
        <Modal.Header closeButton>
          <Modal.Title>
            Do you really want to delete all tasks?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModalDelete}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>{setTasks({Personal: [], Professional: [], Other: []}); toggleModalDelete()}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

  
    </div>
  );
};

ToDo.propTypes = {
}

export default ToDo;
