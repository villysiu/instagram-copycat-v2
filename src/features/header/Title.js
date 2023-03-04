
import { memo } from "react"
import { Link } from "react-router-dom"
const Title = () => {
    return (
        <Link to={"/instagram-copycat-v2"} className="linkBtn">
            <h3 className="px-3">Instagram Copycat</h3>
            
        </Link>
        
    )
}
export default memo(Title)