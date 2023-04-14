import { Spinner } from "react-bootstrap"
import { useSelector } from "react-redux"
import { selectUserbyId } from "./usersSlice"

const UserName = ({userId, nameSize}) => {
    const usersStatus = useSelector(state=>state.users.status)
    const user= useSelector(state=>selectUserbyId(state, userId))

    if(!user && usersStatus==="loading")
        return <Spinner />
    return (
        <b style={{fontSize: nameSize}}>{user.name}</b>
    )
}
export default UserName