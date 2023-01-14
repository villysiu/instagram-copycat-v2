import { useState } from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux';
import AddPost from './posts/AddPost';
import User from './user/User';
import { currentUser } from './user/userSlice';
import { PlusCircle, PersonCircle } from 'react-bootstrap-icons'

const Header = ({setUserPostsCB}) =>{
  const [sidebar, showSidebar]=useState(false)
  const user=useSelector(currentUser) 
  const [modal, showModal]=useState(false)
console.log(user)
    const showSidebarCB = ()=>{
      console.log("clicked")
      showSidebar(false)
    }
    const showModalCB=()=>{
      showModal(false)
    }
    return(
        <>
        <Modal show={modal} onHide={()=>showModal(false)}>
          <AddPost showModalCB={showModalCB} />
        </Modal>
        <Navbar.Offcanvas
              // id={`offcanvasNavbar-expand-false`}
              // aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
              show={sidebar}
              onHide={()=>showSidebar(false)}
            >
              <User showSidebarCB={showSidebarCB} setUserPostsCB={setUserPostsCB} /> 
        </Navbar.Offcanvas>
        


        <Navbar key="false" bg="light" expand="false" fixed="top" className="mb-3">
        <Container fluid>
          
          {/* <Navbar.Brand> */}
          <span>
               <Button className="b-title" onClick={()=>setUserPostsCB(null)}><h1>Inst</h1></Button>
          {/* </Navbar.Brand> */}
          </span>
          {/* <Navbar.Text > */}
          <span>
            {user && 
              <Button className="b-title" onClick={()=>showModal(true)}> 
                <h3><PlusCircle color="black" size="100"/></h3>
              </Button>
            }
            <Button className="b-title" onClick={()=>showSidebar(true)}> 
              <h3><PersonCircle color="black" /></h3>
            </Button>
          {/* </Navbar.Text> */}
          </span>
        
      
            
            
          </Container>
        </Navbar>

    </>
    )
}
export default Header;