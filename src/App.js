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
  const [userPosts, setUserPosts]=useState(null)

  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchPosts())
  }, [dispatch])

  
  if (userStatus === 'loading') 
    return <h1>Loading</h1>


  const setUserPostsCB=(user)=>{
    setUserPosts(user)
    

  }
 
  return (
    <div className="App">  
      
        <Header setUserPostsCB={setUserPostsCB} />
        <br/><br/><br/><br></br>
        {/* { show && <AlertBar error={error}/>} */}
       <div className="list">
        {userPosts ? <UserPostList user={userPosts}/> : <PostList setUserPostsCB={setUserPostsCB} /> }
        </div>
     
    </div>
  );
}

export default App;
