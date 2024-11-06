import Input from "../Input/Input.jsx";
import List from "../List/List.jsx";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "./ToDo.module.css";
import { Modal } from "react-bootstrap";

const ToDo = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("persistantTasks")) || []
  );
  const [task, setTask] = useState("");
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const deleteDoneTaskHandler = () => {
    const updatedTasks = tasks.filter((task) => !task.markedDone);
    setTasks(updatedTasks);
    toggleModal();
  };

  const addTask = (deadline, list) => {
    if (task === "" || task.trim() === "") {
      alert("Please enter a task");
    } else {
      setTasks([
        ...tasks,
        {
          name: task,
          markedDone: false,
          isEditing: false,
          deadline: deadline,
          list: list,
        },
      ]);
      setTask("");
    }
  };

  useEffect(() => {
    localStorage.setItem("persistantTasks", JSON.stringify(tasks));
  }, [tasks]);

  // CRUD Functions

  const arrowHandeler = (source, destination) => {
    // eslint-disable-next-line react/prop-types
    const newTasks = [...tasks];
    [newTasks[source], newTasks[destination]] = [
      newTasks[destination],
      newTasks[source],
    ];
    setTasks(newTasks);
  };

  const stateHandeler = (index) => {
    const temp_tasks = [...tasks];
    const updatedTask = { ...temp_tasks[index] };
    updatedTask.markedDone = !updatedTask.markedDone;
    temp_tasks[index] = updatedTask;
    setTasks(temp_tasks);
  };

  const deleteHandler = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const setTaskHandler = (index, v) => {
    let temp_tasks = [...tasks];
    temp_tasks[index].name = v;
    setTasks(temp_tasks);
  };

  const setEditTaskHandeler = (index) => {
    const temp_tasks = [...tasks];
    temp_tasks[index].isEditing = !temp_tasks[index].isEditing;
    setTasks(temp_tasks);
  };

  return (
    <div
      className={`${styles.ToDo} d-flex flex-column w-100 align-items-center justify-content-center`}
    >
      <div
        className="col-sm-11 col-xs-11 d-flex flex-column justify-content-center align-items-center"
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
            variant="warning"
            className="mx-1 col-xs-2"
            onClick={() => {
              toggleModal();
            }}
          >
            Remove All Done{" "}
          </Button>
          <Button
            variant="danger"
            className="mx-1 col-xs-2"
            onClick={() => {
              setTasks([]);
              localStorage.setItem("persistantTasks", JSON.stringify([]));
            }}
          >
            Reset{" "}
          </Button>
        </div>
      </div>

      {tasks.length > 0 && (
        <List
          tasks={tasks}
          setTasks={setTasks}
          arrowHandeler={arrowHandeler}
          stateHandeler={stateHandeler}
          deleteHandler={deleteHandler}
          setTaskHandler={setTaskHandler}
          setEditTaskHandeler={setEditTaskHandeler}
        />
      )}

      {/* Modal for task details */}
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Do you really want to delete all done tasks?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteDoneTaskHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ToDo;
