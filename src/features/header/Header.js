import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Plus from './Plus';
import Title from './Title';
import Home from './Home';
import Navbar from 'react-bootstrap/Navbar';

import { useDispatch, useSelector } from 'react-redux';

import ProfileDropdown from './ProfileDropdown';
import User from '../user/session/User'
import { currentUser } from '../user/userSlice';
import { fetchCurrentUserId } from '../user/userSlice';

import { fetchUsers } from '../user/userSlice';
import { fetchPosts } from '../posts/postsSlice';

const Header = () =>{
  console.log("in Header")
  const dispatch = useDispatch()
  const userStatus = useSelector(state => state.user.status)
  const usersStatus = useSelector(state => state.user.usersStatus)
  const currUser=useSelector(currentUser) 

  useEffect(() => {
    console.log("grabbing user/users")
     dispatch(fetchCurrentUserId())
     dispatch(fetchUsers())
     dispatch(fetchPosts()) 
  }, [dispatch])

  if (userStatus === 'loading' || usersStatus === 'loading' || 
    userStatus === 'idle' || usersStatus === 'idle') 
    return (
      <Container fluid >
        <Navbar bg="light" fixed="top" style={{height: "80px"}} >
          <h1>Loading</h1>
        </Navbar>
      </Container>
    )

    return(
      <Container fluid >
        
        <Navbar bg="light" fixed="top" style={{height: "80px"}}
        // className="header" 
        >
          
            <Title />
            
            <Navbar.Collapse className="justify-content-end">
            <Home  />
              {currUser ? 
                  <>
                      <Plus />
                      <ProfileDropdown />
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