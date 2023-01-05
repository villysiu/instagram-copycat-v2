import { useState } from "react"
import Login from "./Login"
import Logout from "./Logout"
import Signup from "./Signup"
const User = ({user, setUserCB}) =>{
    
    const [login, setLogin]=useState(true)
    const toggleLogin=()=>{
        setLogin(prev=>!prev)
    }
    return (
        <>
        {user ? 
            <>
                <h2> Hello {user.name}. </h2>
                <Logout setUserCB={setUserCB} /> 
            </>
        : 
            login? <Login toggleLogin={toggleLogin} setUserCB={setUserCB} /> : <Signup toggleLogin={toggleLogin} setUserCB={setUserCB} />
        }
        </>

    )
}
export default User;