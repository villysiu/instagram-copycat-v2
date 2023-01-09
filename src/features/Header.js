import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import AddPost from './posts/AddPost';
import User from './user/User';
import { currentUser } from './user/userSlice';
const Header = () =>{
  const [sidebar, showSidebar]=useState(false)
    const user=useSelector(currentUser) 

console.log(user)
    const showSidebarCB = ()=>{
      showSidebar(false)
    }
    const Sidebar = () =>{
      return (
        <>
        <Offcanvas.Header closeButton  >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  {}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
        
                    <User user={user} />
                    
                    {user && <AddPost user_id={user.id} showSidebarCB={showSidebarCB} /> }
                  
                </Nav>
                
              </Offcanvas.Body>
      
      </>
      )
    }
    return(
        <>
     
        <Navbar key="false" bg="light" expand="false" fixed="top" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Instagram Copycat</Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} onClick={()=>showSidebar(true)}/>
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
              show={sidebar}
            >
              <Sidebar />
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </>
    )
}
export default Header;