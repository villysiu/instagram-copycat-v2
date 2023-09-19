import { Image } from "react-bootstrap"
import { backendAPI } from "../../../app/helper"

const Avatar=({avatar, name})=>{
    if(!avatar){
        return (
            <div className="avatar">
                <div className="avatar_initial">{name[0].toUpperCase()}</div> 
            </div>
        )
    }

    return (
        <Image className="avatar"  src={`${backendAPI}/${avatar}`} /> 
    )
}
export default Avatar