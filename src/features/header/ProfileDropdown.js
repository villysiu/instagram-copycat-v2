import { PersonCircle } from 'react-bootstrap-icons'
import { NavDropdown } from 'react-bootstrap';
import Logout from '../user/session/Logout';
import About from './About';
const ProfileDropdown = ({currUserId}) =>{
    const title = (<PersonCircle className="circle_button" />);
    
    if(!currUserId){
      return(
        <NavDropdown  title={title} >
        <NavDropdown.Item href={`/instagram-copycat-v2/about`}>
              About
          </NavDropdown.Item>
          </NavDropdown>
      )
    }
    return (
      <>
      <NavDropdown  title={title} >
          <NavDropdown.Item href={`/instagram-copycat-v2/users/${currUserId}`}>
              Profile
          </NavDropdown.Item>
          <NavDropdown.Item href={`/instagram-copycat-v2/about`}>
              About
          </NavDropdown.Item>
        <NavDropdown.Divider />
        <Logout />
        
      </NavDropdown>
      </>
    )
}
export default ProfileDropdown