import { Image } from "react-bootstrap"
import { backendAPI } from "../../../app/helper"


const Avatar=({avatar, name})=>{
    
   
    return(
        <>
            {avatar ? 
                <Image className="avatar"  src={`${backendAPI}/${avatar}`} /> 
            :
                <div className="avatar">
                    <div className="avatar_initial">{name[0].toUpperCase()}</div> 
                </div>
    
            }
            </>
    )
}
export default Avatar