import {
  Navbar,
  Container,
  OverlayTrigger,
  Popover,
  Button,
} from "react-bootstrap";
import { CirclePicker } from "react-color";

const Header = ({ setColor }) => {
  const today = new Date().toLocaleDateString();

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
            trigger="focus"
            key="bottom"
            placement="bottom"
            //rootClose
            overlay={
              <Popover>
                <Popover.Body>
                  <CirclePicker
                    style={{ float: "right", marginTop: "3px" }}
                    onChange={(color) => setColor(color.hex)}
                  />
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
};

export default Header;
