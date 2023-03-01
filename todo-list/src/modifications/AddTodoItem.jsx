import { BsPlusSquare } from "react-icons/bs";
import { ListGroup } from "react-bootstrap";

const AddTodoItem = (groupId, handleAddNewTask) => {
  return (
    <ListGroup.Item>
      <input className={groupId} type="text" placeholder="Add new task" />
      <BsPlusSquare
        onMouseOver={({ target }) => (
          (target.style.backgroundColor = "green"),
          (target.style.cursor = "pointer")
        )}
        onMouseOut={({ target }) => (target.style.backgroundColor = "")}
        style={{
          transform: "scale(1.5)",
          float: "right",
          marginTop: "5.5px",
        }}
      />
    </ListGroup.Item>
  );
};

export default AddTodoItem;
