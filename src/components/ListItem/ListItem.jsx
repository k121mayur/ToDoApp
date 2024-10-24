
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const ListItem = ({ index, task="", tasks=[], setTasks }) => {
  const [done, setDone] = useState("d-none")
  
  // const [bg, setbg] = useState("bg-light")
  // const [textColor, setTextColor] = useState("text-primary")

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
    
    let temp_tasks = [...tasks];
    let updatedTask = {...temp_tasks[index]};
    updatedTask.markedDone = !updatedTask.markedDone
    temp_tasks[index] = updatedTask
    setTasks([...temp_tasks])
    localStorage.setItem("persistantTasks", JSON.stringify([...temp_tasks]));
  }

  const deleteHandler = () => {
    const deleteConfirmation = confirm("Are you sure you want to delete this task?");
    if (deleteConfirmation) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      console.log(updatedTasks, "updatedTasks");
      
      setTasks(updatedTasks)
      localStorage.setItem("persistantTasks", JSON.stringify([...updatedTasks]));

    }else{
      alert("Task not deleted")
    }
    
  }

  return (
    <div className={`my-1 ${task.markedDone ? "bg-success" : "bg-light"} col-11 text-left p-1 rounded`}> 
      <div className="d-flex justify-content-between p-1">
        <p className={`${task.markedDone ? "text-white" : "text-primary"} m-0 col-md-8`}>{task.task}</p>
        <div className="col-md-4 col-6 d-flex justify-content-between align-items-center">
          <i className={`fa-solid fa-arrow-up ${task.markedDone ? "text-white" : "text-primary"}`} onClick={() => {arrowUpHandeler(index)}} ></i>
          <i className={`fa-solid fa-arrow-down ${task.markedDone ? "text-white" : "text-primary"}`} onClick={() => {arrowDownHandeler(index)}}></i>
          <input type="checkbox" className="h-100 bg-success" checked={task.markedDone} onChange={() => { stateHandeler()}} />
          <button className={`btn btn-danger ${task.markedDone ? "" : "d-none"} p-0 px-1`}  style={{height: "20px", fontSize: "10px"}} onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ListItem