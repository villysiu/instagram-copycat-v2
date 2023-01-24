import { useDispatch } from 'react-redux';
import { logoutUser } from './userSlice';
import { NavDropdown } from 'react-bootstrap';

const Logout = ({showProfileCB}) =>{
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(logoutUser())
        showProfileCB(null)
    }
    return (
        <NavDropdown.Item onClick={handleClick} type="logout" >
            Logout
        </NavDropdown.Item>
    )
}
export default Logout;