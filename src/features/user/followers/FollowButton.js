import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { follow } from "../usersSlice"
const FollowButton = ({userId}) => {
    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(follow({user_id: userId}))
    }
    return (
        <Button className="follow_btn" onClick={handleClick}>Follow</Button>
    )
}
export default FollowButton