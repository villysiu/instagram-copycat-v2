
import { memo } from "react"
import { Link } from "react-router-dom"
const Title = () => {
    return (
        <Link to={"/instagram-copycat-v2"} className="titleLink">
            <div className="title px-3">Villy's Instagram</div>
        </Link>
        
    )
}
export default memo(Title)