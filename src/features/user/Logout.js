import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { logoutUser } from './userSlice';
const Logout = ({setUserPostsCB}) =>{
    const dispatch=useDispatch();
    const handleClick=()=>{
        
        console.log("logging out")
        dispatch(logoutUser())
        setUserPostsCB(null)

    }
    return (
    <div>
        <Button variant="primary" onClick={handleClick} type="logout" >
        Logout
      </Button>
      </div>
    )
}
export default Logout;