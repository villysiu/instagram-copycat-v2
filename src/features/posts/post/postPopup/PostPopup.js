import { CloseButton } from "react-bootstrap"
import PostPopupLeft from './PostPopupLeft'
import { PostPopupRight } from "./PostPopupRight"



const PostPopup = ({post, setShow}) =>{
    const desc = post.comments.find(c=>c.id===post.desc)
    
    return(
        <>
            <CloseButton variant="white" className="post_modal_close_btn"
                    onClick={()=>setShow(false)}  />

            <div className='post_modal_wrapper'>
                <div className='post_modal_wrapper_l'>
                    <PostPopupLeft post={post} desc={desc} />
                </div>
                <div className='d-none	d-md-block'>
                    <div className='post_modal_wrapper_r' >
                        <PostPopupRight post={post} desc={desc} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default PostPopup