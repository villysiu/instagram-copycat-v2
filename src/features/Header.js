// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import User from './user/User';
const Header = ({login}) =>{
    return(
        <>
     
        <Navbar key="false" bg="light" expand="false" fixed="top" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Instagram Copycat</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
        
                    <User />
                    {/* {login && <AddPhoto /> } */}
                  {/* <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link> */}

                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </>
    )
}
export default Header;