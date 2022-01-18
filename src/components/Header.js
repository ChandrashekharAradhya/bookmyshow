// import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Header() {
  return (
    <div  style={{background:"black",color:"white"}}>
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
    <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        {/* <Nav.Link href="#action2">Link</Nav.Link> */}
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/movies">All Movies</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Events
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
     </Navbar.Collapse>
   </Container>
 </Navbar>
 <Container  style= {{background:"black", color:"white"}} >
    <a>Movies</a>&nbsp;&nbsp;&nbsp;
    <a>Shows</a>&nbsp;&nbsp;&nbsp;
    <a>Events</a>&nbsp;&nbsp;&nbsp;
    <a>Shows</a>&nbsp;&nbsp;&nbsp;
    <a>Sports</a>
 </Container>
    </div>
  );
}

export default Header;