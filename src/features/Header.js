import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import AddPost from './posts/AddPost';
import User from './user/User';
import { currentUser } from './user/userSlice';
const Header = () =>{
    const user=useSelector(currentUser) 
console.log(user)
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
                  {}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
        
                    <User user={user} />
                    
                    {user && <AddPost user_id={user.user.id} /> }
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </>
    )
}
export default Header;