import { useState, useEffect } from "react"

const PostTime=({postTime})=>{
    
    const helper=(secs)=>{
       
        if(secs >= 604800){ //60*60*24*7
            let wk=Math.round(secs/604800)
            return wk===1 ? "1 week ago" : wk + " weeks ago"
        }
        
        else if(secs >= 86400) {
            const dy=Math.round(secs/86400)
            if(dy===7) return "1 week ago"
            if(dy===1) return "1 day ago" 
            return dy + " days ago"
        }
        else if(secs >= 3600) {
            const hr=Math.round(secs/3600)
            if(hr===24) return "1 day ago" 
            if(hr===1) return "1 hour ago"
            return hr + " hours ago"

        }else if(secs>=60){
            const mn=Math.round(secs/60)
            if(mn===60) return "1 hour ago"
            if (mn===1) return "1 minute ago" 
            return mn + " minutes ago"
        }
        else 
            return "now"
    }

    const [date, setDate] = useState("????")
    
    useEffect(() => {
        var timer = setInterval(()=>
            setDate(helper(Math.round(Date.now()/1000)-postTime))
        , 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <>
        &nbsp;•&nbsp;{date}
        </>
    )
}
export default PostTime