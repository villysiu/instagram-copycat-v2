import { useSelector } from "react-redux"
import { selectUserbyId } from "./userSlice"

const UserName = ({user_id}) => {
    const usersStatus = useSelector(state => state.user.usersStatus)
    const user= useSelector(state=>selectUserbyId(state, user_id))

    if (usersStatus === 'loading' || usersStatus === 'idle'){ 
        return (
            <>Loading</>
        )
    }
    
    return (
        <b className="username">{user.name}</b>
    )
}
export default UserName