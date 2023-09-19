import { useDispatch } from 'react-redux';
import { logoutUser } from '../usersSlice';
import { NavDropdown } from 'react-bootstrap';

const Logout = () =>{
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(logoutUser())
    }
    return (
        <NavDropdown.Item onClick={handleClick} type="logout" >
            Logout
        </NavDropdown.Item>
    )
}
export default Logout;