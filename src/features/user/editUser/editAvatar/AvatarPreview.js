import { Image } from "react-bootstrap"
import { Circle } from "react-bootstrap-icons"
const AvatarPreview = ({preview, initial}) => {
   console.log(preview)
    return (
        <div className="round_avatar_div">
        {preview ?
            <>
                <Image src={preview} alt="avatar" className="round_avatar" />
            </>
            : 
        
            < >
                <Circle style={{width: 'fit-content', height: '100%'}} />
                <div className="avatar_initial">{initial.toUpperCase()}</div>
            </>


        }
       </div>
        

    )
}
export default AvatarPreview