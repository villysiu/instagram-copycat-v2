import Plus from './Plus';
import { useSelector } from 'react-redux';

import ProfileDropdown from './ProfileDropdown';
import User from '../user/session/User'

import { Spinner } from 'react-bootstrap';

const PersonActions = () =>{
    const userStatus = useSelector(state => state.users.currUser.status)
    const currUserId = useSelector(state => state.users.currUser.id)
   
    if (!currUserId){
        return  userStatus === 'loading' ? <Spinner  /> : <User />
    }
    return(
        <>
            <Plus />
            <ProfileDropdown currUserId={currUserId} />
        </>
           
    )
}
export default PersonActions