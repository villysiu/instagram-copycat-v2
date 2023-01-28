import { Image } from "react-bootstrap"
const AvatarPreview = ({currAvatar, preview, initial}) => {
    console.log(currAvatar)
    console.log(preview)
    // console.log(currUser)
    return (
        <>
        {preview ? 
            <Image src={URL.createObjectURL(preview)} alt="avator" className="avator round_avator" />
        :
            <>
            {currAvatar ?
                <Image src={`http://localhost:3000/${currAvatar}`} alt="avator" className="avator round_avator" />
                :
                <div className="round_avator empty_avator">{initial}</div>
            }
            </>
            }
            
        </>

    )
}
export default AvatarPreview