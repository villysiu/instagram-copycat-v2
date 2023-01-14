import { useState } from "react"
import Login from "./Login"
import Logout from "./Logout"
import Signup from "./Signup"
import Account from "./Account"
import { Offcanvas } from "react-bootstrap"
import { useSelector } from "react-redux"
import { currentUser } from "./userSlice"
const User = ({showSidebarCB, setUserPostsCB}) =>{
    const user=useSelector(currentUser) 
    const [login, setLogin]=useState(true)
    const toggleLogin=()=>{
        setLogin(prev=>!prev)
    }
    return (
        <>
        
        <Offcanvas.Header closeButton onClick={()=>showSidebarCB()} >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  {}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* <Nav className="justify-content-end flex-grow-1 pe-3"> */}
        {user ? 
            <>
                <h2> Hello {user.name}. </h2>
                <Account />
                <Logout setUserPostsCB={setUserPostsCB} /> 
            </>
        : 
            login? <Login toggleLogin={toggleLogin}  /> : <Signup toggleLogin={toggleLogin}  />
        }
        {/* </Nav> */}
                
                </Offcanvas.Body>
                
        </>

    )
}
export default User;