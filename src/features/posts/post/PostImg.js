import { useHref } from "react-router-dom"
import { Link } from "react-router-dom"
import { backendAPI } from "../../../app/data"
import placeholder from "../../../images/X (1).png"
const PostImg = ({postId, postUrl}) =>{
    const href=useHref()
    const handleImgErr=(e)=>{
        e.target.src = placeholder
    }
    const ImgUrl=()=>{
        return ( 
            <img className="card_img mb-1" src={`${backendAPI}/${postUrl}`} onError={handleImgErr} />
        )
    } 
    
    return(
        <>
        {href===`/instagram-copycat-v2/posts/${postId}` ?
            <ImgUrl />
            :
            <Link to={`/instagram-copycat-v2/posts/${postId}`} >
                <ImgUrl />
            </Link>
        }
        </>
    )
}
export default PostImg