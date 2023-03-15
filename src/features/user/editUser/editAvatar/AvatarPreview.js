import { Image } from "react-bootstrap"
import { Circle } from "react-bootstrap-icons"
const AvatarPreview = ({preview, initial}) => {
   console.log(preview)
    return (
        <>
        {preview ?
            <div>
                <Image src={preview} alt="avatar" className="thumbsize_lg round_avator" />
            </div>
            : 
           
            <div className="thumbsize_lg">
                <div ><Circle style={{width: "100%", height: "100%"}} /></div>
                <div className="initialStyle_lg">{initial.toUpperCase()}</div>
            </div>


        }
       </>
        

    )
}
export default AvatarPreview