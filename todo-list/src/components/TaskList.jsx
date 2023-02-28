import { ListGroup } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const TaskList = ({ task }) => {
  return (
    <ListGroup.Item key={task.id}>
      <input
        type="checkbox"
        checked={task.checked}
        style={{ float: "left", transform: "scale(2)", marginTop: "5px" }}
      />
      {task.task}
      <FaTrashAlt
        onMouseOver={({ target }) => (
          (target.style.color = "red"), (target.style.cursor = "pointer")
        )}
        onMouseOut={({ target }) => (target.style.color = "")}
        style={{ float: "right", marginTop: "3px" }}
      />
    </ListGroup.Item>
  );
};

export default TaskList;
