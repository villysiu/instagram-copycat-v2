import UserPostList from "../posts/UserPostList"

const Profile = ({user}) => {
    console.log("in profile????")
    return (
        <>
        Profile of{user.name}
        
       <br/>
            <UserPostList userId={user.id} />
           
        </>
    )
    
}
export default Profile