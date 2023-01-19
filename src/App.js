import { useState, useEffect } from 'react';
// import { Alert } from 'react-bootstrap';
import Header from './features/Header';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './features/user/userSlice'; 
import { fetchPosts } from './features/posts/postsSlice'

import PostList from './features/posts/PostList';
import UserPostList from './features/posts/UserPostList';

function App() {
  console.log("App")
  const dispatch = useDispatch()
  const userStatus = useSelector(state => state.user.status)
  // const error = useSelector(state => state.user.error)
  const [userPosts, showUserPosts]=useState(false)
  const [userToView, setUserToView] = useState(null)
  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchPosts())
  }, [dispatch])

  
  if (userStatus === 'loading') 
    return <h1>Loading</h1>

const showUserPostsCB=(user)=>{
  showUserPosts(user !== null ? true : false)
  setUserToView(user)
}
 
  return (
    <div className="App">  
        <Header showUserPostsCB={showUserPostsCB} /> 
        <div style={{height: "80px"}}></div> 
        {/* { show && <AlertBar error={error}/>} */}
       
       {userPosts ? <UserPostList user={userToView} showUserPostsCB={showUserPostsCB} /> : <PostList showUserPostsCB={showUserPostsCB}/> }
     
    </div>
  );
}

export default App;
