import { logout } from "../features/user/userSlice"
// export const backendAPI="http://localhost:3000"
export const backendAPI="https://render-ws.onrender.com"

export const duration=30

export const timeoutUser = (now, dispatch) => {
    const exp=localStorage.getItem("expired")
    const due = exp-Date.now()
    const s=setTimeout(()=>{
       dispatch(logout())    
    }, due )

    return ()=>clearTimeout(s)
}
