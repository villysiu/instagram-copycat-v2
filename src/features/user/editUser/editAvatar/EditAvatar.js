import AvatarPreview from "./AvatarPreview"
import { useState } from "react"

import AvatarDoprdown from "./AvatarDoprdown"


const EditAvatar = ({currUser, setAvatar}) =>{
    const [preview, setPreview] = useState(currUser.avatar && `http://localhost:3000/${currUser.avatar}`)

    return (
    
        <div className="p-2 post_header">
            <div style={{display: "flex", alignItems: "center"}}>
                <AvatarPreview preview={preview} initial={currUser.name[0]} />
                <b style={{fontSize: "25px"}}> {currUser.name}</b>
            </div>

            <AvatarDoprdown setPreview={setPreview} setAvatar={setAvatar} />
        </div>

    )
}
export default EditAvatar