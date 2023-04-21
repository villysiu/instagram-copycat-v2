import AvatarPreview from "./AvatarPreview"
import { useState } from "react"

import AvatarDoprdown from "./AvatarDoprdown"
import UserName from "../../UserName"


const EditAvatar = ({currUser, setAvatar}) =>{
    const [preview, setPreview] = useState(currUser.avatar && `http://localhost:3000/${currUser.avatar}`)

    return (
    
        <div className="edit_header">
            <div style={{display: "flex", alignItems: "center", height: '100%'}}>
                <AvatarPreview preview={preview} initial={currUser.name[0]} />
                <div className="px-2">{currUser.name}</div>
            </div>

            <AvatarDoprdown setPreview={setPreview} setAvatar={setAvatar} />
        </div>

    )
}
export default EditAvatar