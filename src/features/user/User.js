import { useState } from "react"
import Login from "./Login"
import Logout from "./Logout"
import Signup from "./Signup"

const User = ({user}) =>{
    
    const [login, setLogin]=useState(true)
    const toggleLogin=()=>{
        setLogin(prev=>!prev)
    }
    return (
        <>
        {user ? 
            <>
                <h2> Hello {user.name}. </h2>
                <Logout /> 
            </>
        : 
            login? <Login toggleLogin={toggleLogin}  /> : <Signup toggleLogin={toggleLogin}  />
        }
        </>

    )
}
export default User;