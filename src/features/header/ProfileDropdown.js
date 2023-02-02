import { PersonCircle } from 'react-bootstrap-icons'
import { NavDropdown } from 'react-bootstrap';
import Logout from '../user/Logout';
import { useSelector } from 'react-redux';
import { currentUser } from '../user/userSlice';

const UserDropdown = ({showProfileCB}) =>{
  const currUser=useSelector(currentUser)
    const title = (<PersonCircle className="circle_button" />);
    
    return (
      <NavDropdown  title={title} >
        
        <NavDropdown.Item onClick={()=>showProfileCB(currUser.id)} >
            Profile
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <Logout showProfileCB={showProfileCB}/>
        
      </NavDropdown>
    )
}
export default UserDropdown