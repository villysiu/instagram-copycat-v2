import { useEffect } from 'react';
import Plus from './Plus';
import { useDispatch, useSelector } from 'react-redux';

import ProfileDropdown from './ProfileDropdown';
import User from '../user/session/User'

import { currentUserId, fetchCurrentUserId } from '../user/userSlice';
import { Spinner } from 'react-bootstrap';

const PersonActions = () =>{
    const userStatus = useSelector(state => state.user.status)
    const currUserId = useSelector(currentUserId)
   
    // console.log(currUserId)
    
    if (!currUserId){
        if(userStatus === 'loading') {
            return <Spinner  />
            
        } else if(userStatus === 'succeeded' || userStatus==="failed") {
            return <User />
        }
    }
    return(
        <>
            <Plus />
            <ProfileDropdown currUserId={currUserId} />
        </>
           
    )
}
export default PersonActions