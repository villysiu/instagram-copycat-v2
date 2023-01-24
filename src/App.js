import { useState, useEffect } from 'react';
// import { Alert } from 'react-bootstrap';
import Header from './features/header/Header';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './features/user/userSlice'; 
import { fetchPosts } from './features/posts/postsSlice'

import PostList from './features/posts/PostList';
import Profile from './features/user/Profile';

function App() {
  console.log("App")
  const dispatch = useDispatch()
  const userStatus = useSelector(state => state.user.status)
  // const error = useSelector(state => state.user.error)

  const [profile, showProfile] = useState(null)


  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchPosts())
  }, [dispatch])

  
  if (userStatus === 'loading') 
    return <h1>Loading</h1>

const showProfileCB = (user) => {
  showProfile(user);
}

 
  return (
    <div className="App">  
        <Header handleClick={()=>showProfile(false)} showProfileCB={showProfileCB} /> 
        <div style={{height: "80px"}}></div> 

        {profile ? <Profile user={profile} /> : <PostList showProfileCB={showProfileCB}/>}
    </div>
  );
}

export default App;
