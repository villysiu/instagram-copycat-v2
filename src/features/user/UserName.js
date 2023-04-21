import { Spinner } from "react-bootstrap"
import { useSelector } from "react-redux"
import { selectUserbyId } from "./usersSlice"

const UserName = ({userId}) => {
    const usersStatus = useSelector(state=>state.users.status)
    const user= useSelector(state=>selectUserbyId(state, userId))

    if(!user && usersStatus==="loading")
        return <Spinner />
    return (
        <span className="username">{user.name}</span>
    )
}
export default UserName