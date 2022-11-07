import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
      <Container className="p-3">
        <Navbar.Brand href="#">
          <img className="w-100" src={require("../assets/images/logo.png")} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">SERVICES</Nav.Link>
            <Nav.Link href="#">WORK FLOW</Nav.Link>
            <Nav.Link href="#">PORTOFOLIO</Nav.Link>
            <Nav.Link href="#">ABOUT US</Nav.Link>
            <Nav.Link href="#">OUR VALUE</Nav.Link>
            <Nav.Link href="#" className="text-dark" style={{ fontSize: "20px" }}>
              +62 21 858 3944
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
