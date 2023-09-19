
import { backendAPI } from "../../../app/helper"
import placeholder from "../../../images/X (1).png"
const PostImg = ({postUrl, setPortrait}) =>{
    console.log(backendAPI)
    console.log(postUrl)
    const handleImgErr=(e)=>{
        e.target.src = placeholder
    }
    const onImgLoad = ({target:img}) =>{
        // console.log( mg.naturalHeight, img.naturalWidth )
        setPortrait( img.naturalHeight > img.naturalWidth)
    }
    return(
        
            <img className="post_img" alt="" 
                src={`${backendAPI}/${postUrl}`} 
                // onError={handleImgErr}
                onLoad={onImgLoad} 
            />
    )
}
export default PostImg