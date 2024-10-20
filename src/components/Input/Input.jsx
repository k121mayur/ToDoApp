/* eslint-disable react/prop-types */
const Input = ({ task, setTask }) => {

  return (
    <input className="mx-3" type="text" onChange={(e) => setTask(e.target.value)} value={task} placeholder="Enter Task"/>
  )
}

export default Input