import { Card } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";

const AddGroup = (handleAddNewGroup) => {
  return (
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
  );
};

export default AddGroup;
