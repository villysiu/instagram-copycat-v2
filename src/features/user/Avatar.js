// import { useMemo } from "react"
import { Spinner, Image } from "react-bootstrap"
import { useSelector } from "react-redux"
import { selectUserbyId } from "./usersSlice"
import { Circle } from "react-bootstrap-icons"


const Avatar=({userId, circleSize, initialStyle})=>{
    const usersStatus = useSelector(state=>state.users.status)
    const user= useSelector(state=>selectUserbyId(state, userId))
   
    if(!user && usersStatus==="loading")
        return <Spinner />
    return(
        <>
            {user.avatar ?
                <Image className={`round_avator ${circleSize}`} src={`http://localhost:3000${user.avatar}`} /> 
                
            :

                <div className={circleSize}>
                    <div ><Circle style={{width: "100%", height: "100%"}} /></div>
                    <div className={initialStyle}>{user.name[0].toUpperCase()}</div>
                </div>
    
            }
            
        </>
    )
}
export default Avatar