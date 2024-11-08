import ListItem from "../ListItem/ListItem.jsx";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";


const List = ({ name, tasks, setTasks, arrowHandeler, stateHandeler, deleteHandler, setTaskHandler, setEditTaskHandeler }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const deleteDoneTaskHandler = () => {
    const tempTasks = {Personal : [...tasks.Personal], Professional: [...tasks.Professional], Other: [...tasks.Other]};
    const updatedTasks = tasks[name].filter((task) => !task.markedDone);
    tempTasks[name] = updatedTasks;
    setTasks(tempTasks);
    toggleModal();
  };

  return (
    <div className="bg-white col-lg-4 col-xl-4 col-md-6 col-sm-12 col-10 mt-3 d-flex flex-column align-items-center justify-content-center rounded shadow p-3">
      <div className="d-flex flex-row justify-content-start">
        <h4 className="text-success mx-5">{name}</h4> 
        { tasks[name].filter((task) => task.markedDone).length > 0 && (
          <Button
          variant="warning"
          className="mx-1 col-xs-2"
          onClick={() => {
            toggleModal();
          }}
        >
          Remove All Done{" "}
        </Button>  
        )}
        
        </div>
      {tasks[name].map((task, index) => (
        <ListItem
          key={index}
          list = {name}
          index={index}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          arrowHandeler={arrowHandeler}
          stateHandeler={stateHandeler}
          deleteHandler={deleteHandler}
          setTaskHandler={setTaskHandler}
          setEditTaskHandeler={setEditTaskHandeler}

        />
      ))}
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

List.propTypes = {
  name: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTasks: PropTypes.func.isRequired,
  arrowHandeler: PropTypes.func.isRequired,
  stateHandeler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  setTaskHandler: PropTypes.func.isRequired,
  setEditTaskHandeler: PropTypes.func.isRequired
}

export default List;
