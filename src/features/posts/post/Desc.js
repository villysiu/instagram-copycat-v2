import { useState } from "react"
import UserName from "../../user/UserName"

const Desc = ({ownerId, desc}) => {
    const [hide, setHide]=useState(true)

   return (
        <div className="mb-2" style={{textAlign: "left", fontSize: "13.6px"}}>
            
            <span  style={{display: "inline"}} ><UserName userId={ownerId} /></span>
            &nbsp;
            {hide? 
                <>
                    <span style={{display: "inline"}} >{desc.slice(0,100)}</span>
                    {
                        desc.length>100 && 
                        <>
                            &nbsp;...&nbsp;
                            <span style={{display: "inline", cursor: "pointer", color: "gray" }} 
                                onClick={()=>setHide(false)} > 
                                more
                            </span>
                        </>
                    }
                </>
                :
                <>
                    <span style={{display: "inline"}} >{desc} &nbsp;</span>
                 
                    <span style={{display: "inline", cursor: "pointer", color: "gray" }} 
                        onClick={()=>setHide(true)} >
                            hide
                    </span>
                </>
            }
</div>
   )
 
}
export default Desc