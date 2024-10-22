/* eslint-disable react/prop-types */
const Input = ({ task, setTask, addTask }) => {

  const addThisTask = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  }
  return (
    <input className="mx-3" type="text" onKeyUp={addThisTask} onChange={(e) => setTask(e.target.value)}  Value={task} placeholder="Enter a task"/>
  )
}

export default Input