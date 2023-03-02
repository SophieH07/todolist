import { Card, ListGroup } from "react-bootstrap";
import TaskList from "./TaskList";
import { BsPlusSquare } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import "../App.css";
import AddTodoItem from "../modifications/AddTodoItem";

const GroupList = ({
  group,
  todoList,
  handleCheck,
  handleDeleteGroup,
  handleDeleteTask,
  addNewTask,
}) => {
  const todoListByGroup = todoList.filter((task) => group.id === task.groupId);

  return (
    <Card key={group.id}>
      <Card.Header>
        {group.name}
        <FaTrashAlt
          onMouseOver={({ target }) => (
            (target.style.color = "red"), (target.style.cursor = "pointer")
          )}
          onMouseOut={({ target }) => (target.style.color = "")}
          style={{ float: "right", marginTop: "3px" }}
          onClick={() => handleDeleteGroup(group.id)}
        />
      </Card.Header>
      <ListGroup variant="flush">
        {todoListByGroup.map((task) => (
          <TaskList
            key={task.id}
            task={task}
            handleCheck={handleCheck}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
        <AddTodoItem groupId={group.id} addNewTask={addNewTask} />
      </ListGroup>
    </Card>
  );
};

export default GroupList;
