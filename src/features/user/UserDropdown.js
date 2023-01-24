import { PersonCircle } from 'react-bootstrap-icons'
import { NavDropdown } from 'react-bootstrap';
import Logout from './Logout';
import { useSelector } from 'react-redux';
import { currentUser } from './userSlice';

const UserDropdown = ({showProfileCB}) =>{
  const currUser=useSelector(currentUser)
    const title = (<h3><PersonCircle color="black" /></h3>);
    
    return (
      <NavDropdown title={title} >
        
        <NavDropdown.Item onClick={()=>showProfileCB(currUser)} >
            Profile
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <Logout showProfileCB={showProfileCB}/>
        
      </NavDropdown>
    )
}
export default UserDropdown