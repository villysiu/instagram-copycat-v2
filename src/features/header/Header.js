// import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Plus from './Plus';
import Title from './Title';
import Home from './Home';
import Navbar from 'react-bootstrap/Navbar';

import { useSelector } from 'react-redux';

import ProfileDropdown from './ProfileDropdown';
import User from '../user/session/User'
import { currentUser } from '../user/userSlice';



const Header = ({ showProfileCB }) =>{
  const currUser=useSelector(currentUser) 

    return(
      <Container fluid >
        
        <Navbar bg="light" fixed="top" className="header" >
          
            <Title showProfileCB={showProfileCB} />
            
            <Navbar.Collapse className="justify-content-end">
            <Home showProfileCB={showProfileCB} />
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