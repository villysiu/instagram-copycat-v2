import ErrorAlert from "./ErrorAlert"

import { useSelector } from "react-redux"
import { clearUserError } from "../user/usersSlice"
import { clearCurrUserError } from "../user/usersSlice"
import { clearEmailError } from "../user/usersSlice"
const Error = ()=>{
    const currUserError=useSelector(state=>state.users.currUser.error)
    const emailError=useSelector(state=>state.users.email.error)
    const userError=useSelector(state=>state.users.user.error)
    // const postError=useSelector(state=>state.posts.error)
    return (
        <>
        {   currUserError && <ErrorAlert err={currUserError} clearErr={clearCurrUserError} /> }
        {   emailError && <ErrorAlert err={emailError} clearErr={clearEmailError} /> }
        {   userError && <ErrorAlert err={userError} clearErr={clearUserError} /> }
        
        </>
    )
}
export default Error