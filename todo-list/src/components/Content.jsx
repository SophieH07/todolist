import { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import GroupList from "./GroupList";
import "../App.css";

function Content() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Work",
      tasks: [
        {
          id: 1,
          checked: false,
          task: "Finnish first project",
        },
      ],
    },
    {
      id: 2,
      name: "Leisure",
      tasks: [
        {
          id: 1,
          checked: false,
          task: "Drink coffee",
        },
        {
          id: 2,
          checked: false,
          task: "Read a book",
        },
      ],
    },
  ]);

  return (
    <div className="content">
      {todoList.map((item) => (
        <GroupList key={item.id} item={item} />
      ))}
      <Card>
        <Card.Header>
          <input id="new-group" type="text" placeholder="Add new group" />
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
        </Card.Header>
      </Card>
    </div>
  );
}

export default Content;
