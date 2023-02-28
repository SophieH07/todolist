import { Navbar, Container } from "react-bootstrap";

function Header() {
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
        <Navbar.Brand>MY TO DO LIST</Navbar.Brand>
        <Navbar.Brand>{today}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
