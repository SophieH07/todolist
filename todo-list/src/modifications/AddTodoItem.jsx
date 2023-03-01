import { BsPlusSquare } from "react-icons/bs";
import { ListGroup } from "react-bootstrap";
import { useRef } from "react";

const AddTodoItem = ({ groupId, addNewTask }) => {
  const inputRef = useRef();

  const handleChange = () => {
    inputRef.current.focus();
    addNewTask(groupId, inputRef.current.value);
    inputRef.current.value == "";
  };

  return (
    <ListGroup.Item>
      <input
        className="new-task"
        ref={inputRef}
        type="text"
        placeholder="Add new task"
        required
      />
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
        onClick={() => handleChange()}
      />
    </ListGroup.Item>
  );
};

export default AddTodoItem;
