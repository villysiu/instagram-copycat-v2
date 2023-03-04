import { useSelector } from "react-redux"
import { selectUserbyId } from "./userSlice"

const Bio = ({user_id}) => {
    const usersStatus = useSelector(state => state.user.usersStatus)
    const user= useSelector(state=>selectUserbyId(state, user_id))

    if (usersStatus === 'loading' || usersStatus === 'idle'){ 
        return (
            <p>Loading</p>
        )
    }
    
    return (
        <div style={{textAlign: "left"}}>{user.bio}</div>
    )
}
export default Bio