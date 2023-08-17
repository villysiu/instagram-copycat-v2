// import { useHref } from "react-router-dom"
import { useState } from "react"
import { backendAPI } from "../../../app/helper"
import placeholder from "../../../images/X (1).png"
const PostImg = ({postUrl, setPortrait}) =>{
    // const [portrait, setPortrait] = useState(false)
    
    const handleImgErr=(e)=>{
        e.target.src = placeholder
    }
    const onImgLoad = ({target:img}) =>{
        // console.log( mg.naturalHeight, img.naturalWidth )
        setPortrait( img.naturalHeight > img.naturalWidth)
    }
    return(
        // <div className={portrait ? "post_img_wrapper portrait" : "post_img_wrapper" }>
            <img className="post_img" alt="" 
                src={`${backendAPI}/${postUrl}`} 
                onError={handleImgErr}
                onLoad={onImgLoad} 
            />
        // </div>
    )
}
export default PostImg