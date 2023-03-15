import { useSelector } from "react-redux"
import { selectUserbyId } from "./usersSlice"

const Bio = ({bio}) => {
    console.log("in bio")

    
    return (
        <div style={{textAlign: "left"}}>{bio}</div>
    )
}
export default Bio