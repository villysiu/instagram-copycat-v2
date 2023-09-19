import PostPopupLeft from './PostPopupLeft'
import { PostPopupRight } from "./PostPopupRight"



const PostPopup = ({post}) =>{
    
    return(
        <>
            <div className='post_modal_wrapper'>
                <div className='post_modal_wrapper_l'>
                    <PostPopupLeft post={post} />
                </div>
                <div className='d-none	d-md-block'>
                    <div className='post_modal_wrapper_r' >
                        <PostPopupRight post={post} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default PostPopup