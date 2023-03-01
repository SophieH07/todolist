import {
  Navbar,
  Container,
  OverlayTrigger,
  Popover,
  Button,
} from "react-bootstrap";
import { CirclePicker } from "react-color";

function Header() {
  const today = new Date().toLocaleDateString();

  const changeColor = (color) => {
    console.log(color.hex);
    //document.getElementsByTagName("html").style.color = color.hex;
    document.getElementById("main").style.backgroundColor = color.hex;
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ marginBottom: "20px" }}
      sticky="top"
    >
      <Container>
        <Navbar.Brand>MY TO-DO LIST</Navbar.Brand>
        <Navbar.Brand>
          <OverlayTrigger
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
              <Popover>
                <Popover.Body>
                  <CirclePicker onChange={(color) => changeColor(color)} />
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="secondary">Change color</Button>
          </OverlayTrigger>
        </Navbar.Brand>
        <Navbar.Brand>{today}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
