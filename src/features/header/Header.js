// import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Plus from './Plus';
import Title from './Title';
import Navbar from 'react-bootstrap/Navbar';

import { useSelector } from 'react-redux';

import UserDropdown from '../user/UserDropdown';
import User from '../user/User';
import { currentUser } from '../user/userSlice';



const Header = ({handleClick, showProfileCB}) =>{
  const currUser=useSelector(currentUser) 

    return(
      <Container fluid>
        
        <Navbar bg="light" fixed="top" style={{height: '80px'}}>
          
            <Title handleClick={handleClick} />
            
            <Navbar.Collapse className="justify-content-end">
              {currUser ? 
                  <>
                      <Plus />
                      <UserDropdown showProfileCB={showProfileCB} />
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