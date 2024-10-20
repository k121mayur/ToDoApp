/* eslint-disable react/prop-types */
import ListItem from "../ListItem/ListItem.jsx"

const List = ({ tasks}) => {
  return (
    <div>
        {tasks.map((task, index) => (
        <ListItem key={index} task={task} />
      ))}
    </div>
  )
}

export default List