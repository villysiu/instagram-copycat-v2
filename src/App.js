import { useState, useEffect } from 'react';
// import { Alert } from 'react-bootstrap';
import Header from './features/header/Header';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './features/user/userSlice'; 
import { fetchPosts } from './features/posts/postsSlice';
import { fetchUsers } from './features/users/usersSlice';

import PostList from './features/posts/PostList';
import Profile from './features/user/Profile';

function App() {
  console.log("App")
  const dispatch = useDispatch()
  const userStatus = useSelector(state => state.user.status)
  const usersStatus = useSelector(state => state.users.status)
  const postsStatus = useSelector(state => state.posts.status)
  // const error = useSelector(state => state.user.error)

  const [profile, showProfile] = useState(null)


  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchPosts())
    dispatch(fetchUsers())
  }, [dispatch])

  
  if (userStatus === 'loading' || usersStatus==='loading' || postsStatus === 'loading') 
    return <h1>Loading</h1>

const showProfileCB = (userId) => {
  // console.log(user)
  showProfile(userId);
}

 
  return (
    <div className="App">  
        <Header showProfileCB={showProfileCB} /> 
        <div style={{height: "80px"}}></div> 

        {profile ? <Profile userId={profile} /> : <PostList showProfileCB={showProfileCB}/>}
    </div>
  );
}

export default App;
