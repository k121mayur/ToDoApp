import ListItem from "../ListItem/ListItem.jsx";
import PropTypes from "prop-types";


const List = ({ name, tasks, setTasks, arrowHandeler, stateHandeler, deleteHandler, setTaskHandler, setEditTaskHandeler }) => {
  return (
    <div className="bg-white col-lg-4 col-xl-4 col-md-6 col-sm-12 col-10 mt-3 d-flex flex-column align-items-center justify-content-center rounded shadow p-3">
      <h4 className="text-success">{name}</h4>
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
