import { logout } from "../features/user/userSlice"
export const duration=30
export const timeoutUser = (now, dispatch) => {
    console.log("in timeoutUser")
    const exp=localStorage.getItem("expired")
    const due = exp-now
    const s=setTimeout(()=>{
       dispatch(logout())    
    }, due )

    return ()=>clearTimeout(s)
}