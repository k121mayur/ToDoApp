/* eslint-disable react/prop-types */
import ListItem from "../ListItem/ListItem.jsx"

const List = ({ tasks, setTasks }) => {
  return (
    <div className="bg-white col-lg-4 col-xl-4 col-md-6 col-sm-12 col-10 mt-3 d-flex flex-column align-items-center justify-content-center rounded shadow p-3">
        <h4 className="text-success">Primary List</h4>
        {tasks.map((task, index) => (
        <ListItem key={index} index={index} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  )
}

export default List