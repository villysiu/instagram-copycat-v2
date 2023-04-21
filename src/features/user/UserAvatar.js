import Avatar from "./Avatar"
import UserName from "./UserName"
const UserAvatar = (params) =>{
    
    return (
        <div style={{display: 'flex',justifyContent: 'flex-start', alignItems: 'center' }}>
            <Avatar {...params} />
            &nbsp;&nbsp;
            <UserName {...params} />
        </div>
    )
}
export default UserAvatar
