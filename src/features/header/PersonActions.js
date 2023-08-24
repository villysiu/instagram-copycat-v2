import Plus from './Plus';
import { useSelector } from 'react-redux';

import ProfileDropdown from './ProfileDropdown';
import User from '../user/session/User'

import { Spinner } from 'react-bootstrap';

const PersonActions = () =>{
    const userStatus = useSelector(state => state.users.currUser.status)
    const currUser = useSelector(state => state.users.currUser.currUser)
  console.log(currUser)
    if (!currUser){
        return  userStatus === 'loading' ? <Spinner  /> : <User />
    }
    return(
        <>
            <Plus />
            <ProfileDropdown currUser={currUser} />
                
        </>
           
    )
}
export default PersonActions