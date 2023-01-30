import { Image } from "react-bootstrap"
const AvatarPreview = ({link, initial}) => {
   
    return (
        <>
        {link ?
            <Image src={link} alt="avator" className="avator round_avator" />
            : 
            <div className="round_avator empty_avator">{initial}</div>
        }
       
        </>

    )
}
export default AvatarPreview