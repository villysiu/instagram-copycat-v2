import { useState, useEffect } from "react"
import { calculateTime } from "../../../app/helper";
const PostTime=({postTime})=>{

    const [date, setDate] = useState("???")
    
    useEffect(() => {
        var timer = setInterval(()=>
            setDate(calculateTime(Math.round(Date.now()/1000)-postTime))
        , 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <>
            <div className="mx-1">•</div>
            <div>{date}</div>
        </>
    )
}
export default PostTime