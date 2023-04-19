import { logout } from "../features/user/userSlice"
export const backendAPI="http://localhost:3000"
// export const backendAPI="https://mysite-web.onrender.com"
export const duration=15
export const timeoutUser = (now, dispatch) => {
    console.log("in timeoutUser")
    const exp=localStorage.getItem("expired")
    const due = exp-now
    const s=setTimeout(()=>{
       dispatch(logout())    
    }, due )

    return ()=>clearTimeout(s)
}
