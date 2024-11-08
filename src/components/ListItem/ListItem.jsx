import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const ListItem = ({
  index,
  task,
  list,
  tasks,
  arrowHandeler,
  stateHandeler,
  deleteHandler,
  setTaskHandler,
  setEditTaskHandeler
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div
      className={`my-1 ${
        task.markedDone ? "bg-success" : "bg-light"
      } col-11 text-left p-1 rounded`}
    >
      <div className="d-flex justify-content-between p-1">
        {task.isEditing && (
          <input
            className="rounded p-1 border bg-white shadow-sm shadow-primary"
            type="text"
            defaultValue={task.name}
            onChange={(e) => {
              setTaskHandler(list, index, e.target.value)
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setEditTaskHandeler(list, index);
            }}}
          />
        )}

        {!task.isEditing && (
          <p
            className={`${
              task.markedDone ? "text-white" : "text-primary"
            } m-0 col-md-8 d-flex justify-content-between align-items-center pe-3`}
            onClick={() => setEditTaskHandeler(index)}
          >
            {task.name} <span className="text-danger small">{task.deadline}</span>
          </p>
        )}

        <div className="col-md-4 col-6 d-flex justify-content-between align-items-center">
          {!task.isEditing && (
            <i
            className={`fa-solid fa-pen-to-square ${
              task.markedDone ? "text-white" : "text-primary"
            }`}
            onClick={() => setEditTaskHandeler(list, index)}
          ></i>
          )}
          
          <i
            className={`fa-solid fa-arrow-up ${
              task.markedDone ? "text-white" : "text-primary"
            } ${index === 0 ? "d-none" : ""}`}
            onClick={() => arrowHandeler(list, index, index - 1)}
          ></i>
          <i
            className={`fa-solid fa-arrow-down ${
              task.markedDone ? "text-white" : "text-primary"
            } ${index === tasks[list].length - 1 ? "d-none" : ""}`}
            onClick={() => arrowHandeler(list, index, index + 1)}
          ></i>
          <input
            type="checkbox"
            className="bg-success"
            checked={task.markedDone}
            onChange={() => stateHandeler(list, index)}
          />
          <button
            className={`btn btn-danger ${
              task.markedDone ? "" : "d-none"
            } p-0 px-1`}
            style={{ height: "20px", fontSize: "10px" }}
            onClick={toggleModal}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Modal for task details */}
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Do you really want to delete following task?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{task.name}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteHandler(list, index);
              toggleModal();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  list: PropTypes.string.isRequired,
  task: PropTypes.object.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  arrowHandeler: PropTypes.func.isRequired,
  stateHandeler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  setTaskHandler: PropTypes.func.isRequired,
  setEditTaskHandeler: PropTypes.func.isRequired
};



export default ListItem;
