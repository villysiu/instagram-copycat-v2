import { useState } from "react"
import AvatarDoprdown from "./AvatarDoprdown"
import { Image } from "react-bootstrap"


const EditAvatar = ({avatar, setAvatar, initial}) =>{
    const [preview, setPreview] = useState(avatar && `http://localhost:3000/${avatar}`)

    return (
    
        <div className="mt-2 mb-4 edit_avatar_wrapper">
            {preview ?
                <Image className="edit_avatar"  src={`${preview}`} alt="avatar" /> 
                :
                <div className="edit_avatar">
                    <div className="edit_avatar_initial">{initial.toUpperCase()}</div> 
                </div>
                
            }
            <AvatarDoprdown setPreview={setPreview} setAvatar={setAvatar} />
        </div>

    )
}
export default EditAvatar