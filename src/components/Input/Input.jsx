/* eslint-disable react/prop-types */
const Input = ({ task, setTask, addTask }) => {

  const addThisTask = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  }
  return (
    <input className="mx-1 p-1 ms-1 rounded border shadow col-7 col-md-4" id="task"  type="text" onKeyUp={addThisTask} onChange={(e) => setTask(e.target.value)} value={task} placeholder="Enter a task"/>
  )
}

export default Input