// import { useMemo } from "react"
import { Spinner, Image } from "react-bootstrap"
import { useSelector } from "react-redux"
import { selectUserbyId } from "./usersSlice"
import { backendAPI } from "../../app/data"
import { Circle } from "react-bootstrap-icons"

const Avatar=({userId, circleSize})=>{
    const usersStatus = useSelector(state=>state.users.status)
    const user= useSelector(state=>selectUserbyId(state, userId))
    
    if(!user && usersStatus==="loading")
        return <Spinner />
    return(
        <div className="round_avatar_div" >
            {user.avatar ?
                // <Image className={`round_avator ${circleSize}`} src={`${backendAPI}/${user.avatar}`} /> 
                <Image className="round_avatar"  src={`${backendAPI}/${user.avatar}`} /> 
            :
                <>
                    <Circle className="round_avatar"
                    // style={{width: 'fit-content', height: '100%'}} 
                    />
                    <div className="avatar_initial"  >{user.name[0].toUpperCase()}</div> 
                    </>
    
            }
            
            </div>
    )
}
export default Avatar