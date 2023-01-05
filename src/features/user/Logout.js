import Button from 'react-bootstrap/Button';
import { logout } from '../../app/actions';
const Logout = ({setUserCB}) =>{
    const handleClick=()=>{
        console.log("logging out")
        logout(setUserCB)

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