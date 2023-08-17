import { PersonCircle } from 'react-bootstrap-icons'
import { NavDropdown } from 'react-bootstrap';
import Logout from '../user/session/Logout';
const ProfileDropdown = ({currUserId}) =>{
    const title = (<PersonCircle className="circle_button" />);
    
    return (
      <>
      <NavDropdown  title={title} >
          <NavDropdown.Item href={`/users/${currUserId}`}>
              Profile
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <Logout />
        
      </NavDropdown>
      </>
    )
}
export default ProfileDropdown