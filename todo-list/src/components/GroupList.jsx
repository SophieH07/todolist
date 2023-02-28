import { Card, ListGroup } from "react-bootstrap";
import TaskList from "./TaskList";
import { BsPlusSquare } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import "../App.css";

const GroupList = ({ item }) => {
  return (
    <Card key={item.id}>
      <Card.Header>
        {item.name}
        <FaTrashAlt
          onMouseOver={({ target }) => (
            (target.style.color = "red"), (target.style.cursor = "pointer")
          )}
          onMouseOut={({ target }) => (target.style.color = "")}
          style={{ float: "right", marginTop: "3px" }}
        />
      </Card.Header>
      <ListGroup variant="flush">
        {item.tasks.map((task) => (
          <TaskList key={task.id} task={task} />
        ))}
        <ListGroup.Item>
          <input
            id="new-task"
            className={item.name}
            type="text"
            placeholder="Add new task"
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
          />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default GroupList;
