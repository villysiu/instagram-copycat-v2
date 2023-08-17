import { OverlayTrigger, Tooltip } from "react-bootstrap"

const LikeCount = ({likes}) =>{
    
    if(likes.length===0){
        return null
        // return <div className="like_text">0 like</div>
    }
    return(
       
        <OverlayTrigger key='top' placement="top" overlay={ 
            <Tooltip> 
                { 
                    likes.map((like, idx)=>{
                        return <div key={idx}>{like.user_name}</div> })
                }
            </Tooltip> }>
            <div className="bold_font"> {likes.length===1 ? '1 like' :  `${likes.length} likes`} </div>
        </OverlayTrigger>
    )
}
export default LikeCount