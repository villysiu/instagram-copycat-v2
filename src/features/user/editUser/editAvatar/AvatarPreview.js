import { Image, Nav } from "react-bootstrap"
const AvatarPreview = ({preview, initial}) => {
   console.log(preview)
    return (
        <>
        {preview ?
            <Nav.Item>
                <Image src={preview} alt="avatar" className="avator round_avator" />
            </Nav.Item>
            : 
            <Nav.Item className="round_avator empty_avator">
                {initial}
            </Nav.Item>
        }
       </>
        

    )
}
export default AvatarPreview