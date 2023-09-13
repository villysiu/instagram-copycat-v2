import UserHover from "./UserHover"


export  const UsernameLink = ({author}) =>{
    return(

            <UserHover author={author} children={
                <span className="bold_font">{author.name}</span>
            } />   
            
    )
}

export default UsernameLink