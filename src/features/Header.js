import { useState } from 'react';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';

import { useSelector } from 'react-redux';
import AddPost from './posts/AddPost';
import User from './user/User';
import { currentUser } from './user/userSlice';
import { PlusCircle, PersonCircle } from 'react-bootstrap-icons'

const Header = ({showUserPostsCB}) =>{
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
        <Modal show={modal} onHide={()=>showModal(false)} >
          <AddPost showModalCB={showModalCB} />
        </Modal>
        <Navbar.Offcanvas placement="end" show={sidebar} onHide={()=>showSidebar(false)} >
          <User showSidebarCB={showSidebarCB} showUserPostsCB={showUserPostsCB} /> 
        </Navbar.Offcanvas>
        
        <Navbar bg="light" fixed="top" style={{height: '80px'}}>
          <Container fluid>
            <Navbar.Brand className="transparent_button" as="button" onClick={()=>showUserPostsCB(null)}>
              <h2>Instagram Copycat</h2>
            </Navbar.Brand>
            
            <Navbar.Collapse className="justify-content-end">

                {user && 
                  <Navbar.Text as="button" className="transparent_button" onClick={()=>showModal(true)}> 
                    <h3><PlusCircle color="black"/></h3>
                  </Navbar.Text>
                }
                <Navbar.Text as="button" className="transparent_button" onClick={()=>showSidebar(true)}> 
                  <h3><PersonCircle color="black" /></h3>
                </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    </>
    )
}
export default Header;