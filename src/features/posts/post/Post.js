import { useState } from "react"
import PostImg from "./PostImg"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"

import { memo } from "react"

const Post = ({ post }) => {

    const [portrait, setPortrait] = useState(false)
    
    return (
        <>
            

            <div className="post pt-1 pb-4">
                <PostHeader post={post} />
                <div className={portrait ? "post_img_wrapper portrait" : "post_img_wrapper" }>
                    <PostImg postUrl={post.url} setPortrait={setPortrait} />
               </div>
                <PostFooter post={post} />
            </div>
        </>
   
    )
}
const areEqual = (prevProps, nextProps) => {
   
    if (prevProps.post.desc !== nextProps.post.desc ||
        prevProps.post.comments !== nextProps.post.comments) {

        return false      // will re-render
    }
    return true         // do not re-render   
  }

export default memo(Post, areEqual)