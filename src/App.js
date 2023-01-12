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


  const setUserPostsCB=(obj)=>{
    setUserPosts(obj)
    

  }
 
  return (
    <div className="App">  
      <header className="App-header">
        <Header setUserPostsCB={setUserPostsCB} />
        <br/><br/><br/><br></br>
        {/* { show && <AlertBar error={error}/>} */}
       
        {userPosts ? <UserPostList userPosts={userPosts}/> : <PostList setUserPostsCB={setUserPostsCB} /> }
      </header>
    </div>
  );
}

export default App;
