
const Account = ({user, setPostsCB}) => {
    return (
        <>
            <p>Account</p>
            <p>Your posts</p>
            {/* <Button className="btn-owner" onClick={()=>setPostsCB({id: user.id, name:user.name} )} >{user.name} </Button> */}
        </>
    )
}
export default Account