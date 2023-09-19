import UserHover from "./UserHover"


export  const UsernameLink = ({author}) =>{
    return(

            <UserHover author={author} children={
                <span><b>{author.name}</b></span>
            } />   
            
    )
}

export default UsernameLink