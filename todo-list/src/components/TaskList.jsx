import { ListGroup } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const TaskList = ({ task, handleCheck, handleDeleteTask }) => {
  return (
    <ListGroup.Item key={task.id}>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={() => handleCheck(task.id)}
        style={{
          float: "left",
          transform: "scale(2)",
          marginTop: "5px",
          marginRight: "4px",
        }}
      />
      {task.task}
      <FaTrashAlt
        onMouseOver={({ target }) => (
          (target.style.color = "red"), (target.style.cursor = "pointer")
        )}
        onMouseOut={({ target }) => (target.style.color = "")}
        style={{ float: "right", marginTop: "3px" }}
        onClick={() => handleDeleteTask(task.id)}
      />
    </ListGroup.Item>
  );
};

export default TaskList;
