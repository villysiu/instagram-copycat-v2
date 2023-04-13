import { Image } from "react-bootstrap"
import { useHref } from "react-router-dom"
import { Link } from "react-router-dom"

const PostImg = ({postId, postUrl}) =>{
    const href=useHref()
    const ImgUrl=()=> <Image className="card_img mb-1" variant="top" src={`${postUrl}`} />
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