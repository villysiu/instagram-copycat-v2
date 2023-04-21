import { useHref } from "react-router-dom"
import { Link } from "react-router-dom"
import { backendAPI } from "../../../app/data"
import placeholder from "../../../images/X (1).png"
const PostImg = ({postId, postUrl}) =>{
    const href=useHref()
    const handleImgErr=(e)=>{
        e.target.src = placeholder
    }
    
    
    return(
        <img className="card_img mb-1" alt="" src={`${backendAPI}/${postUrl}`} onError={handleImgErr} />
    )
}
export default PostImg