// import { useMemo } from "react"
import { Nav, Image } from "react-bootstrap"
import { useSelector } from "react-redux"
import { selectUserbyId } from "./userSlice"

const Avatar=({user_id})=>{
    const usersStatus = useSelector(state => state.user.usersStatus)
    const user= useSelector(state=>selectUserbyId(state, user_id))

    if (usersStatus === 'loading' || usersStatus === 'idle'){ 
        return (
            <Nav.Item className="round_avator empty_avator thumbsize"></Nav.Item>
                
        )
    }
    
    // return useMemo(()=>{
    return(
        <>
            {user.avatar ?
                <Image className="round_avator thumbsize" src={`http://localhost:3000/${user.avatar}`} /> 
                
            :
                <Nav.Item className="round_avator empty_avator thumbsize">
                    {user.name[0]}
                </Nav.Item>
    
            }
            
        </>
    )
            // },[user_id])
}
export default Avatar