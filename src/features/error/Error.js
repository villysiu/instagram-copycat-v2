import UserError from "./UserError"
import PostError from "./PostError"
import UsersError from "./UsersError"
const Error = ()=>{
    return (
        <>
        <UserError />
        <UsersError />
        <PostError />

        </>
    )
}
export default Error