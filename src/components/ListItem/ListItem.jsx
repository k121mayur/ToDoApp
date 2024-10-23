import { useState } from "react"

/* eslint-disable react/prop-types */
const ListItem = ({ index, task, tasks, setTasks }) => {
  const [done, setDone] = useState("d-none")
  
  const [bg, setbg] = useState("bg-light")
  const [textColor, setTextColor] = useState("text-primary")

  const arrowUpHandeler = (i) => {
    if (i === 0) {
      return
    }
    const newTasks = [...tasks];
    [newTasks[i - 1], newTasks[i]] = [newTasks[i], newTasks[i - 1]];
    setTasks(newTasks);
  }

  const arrowDownHandeler = (i) => {
    if (i === tasks.length - 1) {
      return
    }
    const newTasks = [...tasks];
    [newTasks[i + 1], newTasks[i]] = [newTasks[i], newTasks[i + 1]];
    setTasks(newTasks);
  }

  const stateHandeler = () => {
    setDone(done === "d-none" ? "" : "d-none")
    if (bg === "bg-light") {
      setbg("bg-success")
      setTextColor("text-white")
    } else {
      setbg("bg-light")
      setTextColor("text-primary")
    }
  }

  return (
    <div className={`my-1 ${bg} col-10 text-left p-1 rounded`}> 
      <div className="d-flex justify-content-between p-1">
        <p className={`${textColor} m-0 col-8">{task}`}>{task}</p>
        <div className="col-4 d-flex justify-content-between align-items-center">
          <i className={`fa-solid fa-arrow-up ${textColor}`} onClick={() => {arrowUpHandeler(index)}} ></i>
          <i className={`fa-solid fa-arrow-down ${textColor}`} onClick={() => {arrowDownHandeler(index)}}></i>
          <input type="checkbox" className="h-100 bg-success" onClick={() => { stateHandeler()}}/>
          <button className={`btn btn-danger ${done} p-0 px-1`}  style={{height: "20px", fontSize: "10px"}} onClick={() => {setTasks(tasks.filter((t, i) => i !== index))}}>Delete</button>

        </div>
       
      </div>
     
    
    </div>
  )
}

export default ListItem