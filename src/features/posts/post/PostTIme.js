import { useEffect } from "react"

const PostTime=({postTime})=>{
    
    const helper=(secs)=>{
       

        if(secs >= 604800){
            let temp=Math.round(secs/604800)
            return temp===1 ? 1 + " week ago" : temp + " weeks ago"
        }
        
        else if(secs >= 86400) {
            const temp=Math.round(secs/86400)
            if(temp===7) return 1+" week ago"
            if(temp===1) return 1 + " day ago" 
            return temp + " days ago"
        }
        else if(secs >= 3600) {
            const temp=Math.round(secs/3600)
            if(temp===24) return 1 + " day ago" 
            if(temp===1) return 1 + " hour ago"
            return temp + " hours ago"

        }else if(secs>=60){
            const temp=Math.round(secs/60)
            if(temp==-60) return 1+" hour ago"
            if (temp===1) return 1 + " minute ago" 
            return temp + " minutes ago"
        }
        else 
            return "now"
            

    }
    let rrrr=Date.now()
    useEffect(()=>{
        rrrr=Date.now()
     },[])
    const time=helper(Math.round(rrrr/1000)-postTime)

    return(
        <>
        &nbsp;•&nbsp;{time}
        </>
    )
}
export default PostTime