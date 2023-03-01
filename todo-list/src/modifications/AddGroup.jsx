import { Card } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import { useRef } from "react";

const AddGroup = ({ addNewGroup, newGroup, setNewGroup }) => {
  const inputRef = useRef();

  const handleChange = () => {
    inputRef.current.focus();
    addNewGroup();
  };

  return (
    <Card>
      <Card.Header>
        <input
          className="new-group"
          type="text"
          ref={inputRef}
          placeholder="Add new group"
          required
          value={newGroup}
          onChange={(e) => setNewGroup(e.target.value)}
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
      </Card.Header>
    </Card>
  );
};

export default AddGroup;
