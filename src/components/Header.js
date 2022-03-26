import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          AuthorsHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav activeKey="/">
            <Nav.Link as={Link} to="/">
              Authors
            </Nav.Link>
          </Nav>
          <Nav activeKey="/fav-authors">
            <Nav.Link as={Link} to="/fav-authors">
              Favorite Authors
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
