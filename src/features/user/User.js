import { useState } from "react"
import Login from "./Login"
import Logout from "./Logout"
import Signup from "./Signup"
const User = () =>{
    const [user, setUser]=useState(null)
//     useEffect(()=>{
//     if(localStorage.getItem('exp')>Date.now()){
//       setUser(JSON.parse(localStorage.getItem('user')))
//     }else{
//       localStorage.clear()
//       setUser(null)
//     }
//     setLoading(false)
//   } , [])
    const [login, setLogin]=useState(true)
    const toggleLogin=()=>{
        setLogin(prev=>!prev)
    }
    return (
        <>
        {
            login? <Login toggleLogin={toggleLogin} /> : <Signup toggleLogin={toggleLogin} />
        }
        </>
    )
}
export default User;