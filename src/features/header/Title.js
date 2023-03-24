
import { memo } from "react"
import { Link } from "react-router-dom"
const Title = () => {
    return (
        <Link to={"/instagram-copycat-v2"} className="titleLink">
            <h3 className="px-3">Villy's Instagram</h3>
        </Link>
        
    )
}
export default memo(Title)