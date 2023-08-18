import { PersonCircle } from 'react-bootstrap-icons'
import { NavDropdown, Image } from 'react-bootstrap';
import Logout from '../user/session/Logout';
import { backendAPI } from '../../app/helper';
const ProfileDropdown = ({currUser}) =>{
    
    // const title = (<PersonCircle className="circle_button" />);
    const title = (<Image className=" avatar circle_button"  src={`${backendAPI}/${currUser.avatar}`} /> )
    return (
      <>
      <NavDropdown  title={title} >
          <NavDropdown.Item href={`/users/${currUser.id}`}>
              Profile
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <Logout />
        
      </NavDropdown>
      </>
    )
}
export default ProfileDropdown