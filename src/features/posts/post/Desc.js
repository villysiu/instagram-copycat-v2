import { useState } from "react"

const Desc = ({desc}) => {
    
    const [hide, setHide]=useState(true)
    
    const HiddenDesc=(remainDesc)=>{
        return(
            hide ?  
                <>
                    <span className="post_desc mx-2">...</span>
                    <span className="post_desc hide_link" onClick={()=>setHide(false)} > 
                        more
                    </span>
                </>
                :
                <>
                    <span className="post_desc me-2">{remainDesc}</span>
                    <span className="post_desc hide_link" onClick={()=>setHide(true)} >
                        hide
                    </span>
                </>
        )
    }
    if(!desc)
        return null
    return (
        <div className="post_desc_wrapper">
            
            <span className="post_desc bold_font me-2">{desc.user.name}</span>
            <span style={{display: "inline"}} >{desc.comment.slice(0,100)}</span>
            { desc.comment.length>=100 && HiddenDesc(desc.comment.slice(100)) }
        </div>
    )
 
}
export default Desc