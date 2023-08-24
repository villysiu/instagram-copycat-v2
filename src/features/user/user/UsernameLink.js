import UserHover from "./UserHover"


export  const UsernameLink = ({author}) =>{
    return(

            <UserHover author={author} children={
                <div className="bold_font mx-1">{author.name}</div>
            } />   
            
    )
}
export default UsernameLink