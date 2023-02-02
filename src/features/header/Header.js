// import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Plus from './Plus';
import Title from './Title';
import Navbar from 'react-bootstrap/Navbar';

import { useSelector } from 'react-redux';

import ProfileDropdown from './ProfileDropdown';
import User from '../user/User';
import { currentUser } from '../user/userSlice';



const Header = ({ showProfileCB }) =>{
  const currUser=useSelector(currentUser) 

    return(
      <Container fluid >
        
        <Navbar bg="light" fixed="top" className="header" >
          
            <Title showProfileCB={showProfileCB} />
            
            <Navbar.Collapse className="justify-content-end">
              {currUser ? 
                  <>
                      <Plus />
                      <ProfileDropdown showProfileCB={showProfileCB} />
                  </>
                  :
                  <User />
                  
              }
            </Navbar.Collapse>
          
        </Navbar>

        </Container>
    )
}
export default Header;