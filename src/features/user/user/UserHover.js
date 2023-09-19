import { useState } from "react"
import { Popover,  OverlayTrigger } from "react-bootstrap"
import { Link } from "react-router-dom"
import UserPopup from "./UserPopup"

const UserHover = ({author, children}) =>{
    const [show, setShow] = useState(false);
    const renderPopover = (props) => (
        <div onMouseEnter={()=>setShow(true)} 
        onMouseLeave={()=>setShow(false)} 
        >
            <Popover id="popover-basic" {...props} 
            bsPrefix="user_popover"
            >
                <UserPopup author={author} />
            </Popover>
        </div>
    );

    return (
        <OverlayTrigger placement="auto-start" overlay={renderPopover} show={show} >
            <span  onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}
            >
                <Link className="link_black" to={`../users/${author.id}`}>
                    {children}
                </Link>
            </span> 
        </OverlayTrigger>
      );

}
export default UserHover