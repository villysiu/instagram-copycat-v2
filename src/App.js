import React, {useEffect} from 'react';
import Header from './features/header/Header';
import './App.css';
import { Outlet } from "react-router-dom";
import Error from './features/error/Error';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './features/user/usersSlice';
import { fetchPosts } from './features/posts/postsSlice';
import { fetchCurrentUserId } from './features/user/userSlice';
import { ScrollRestoration } from 'react-router-dom';
import { timeoutUser } from './app/data';
function App() {
    
    const dispatch=useDispatch();

    const usersStatus = useSelector(state => state.users.status)
    const userStatus = useSelector(state => state.user.status)
    const postStatus = useSelector(state => state.posts.status)

    
    useEffect(()=>{
      if(usersStatus==="idle")
          dispatch(fetchUsers())

      if(userStatus === 'idle' ){
        dispatch(fetchCurrentUserId())
        .unwrap()
        .then(() => {timeoutUser(Date.now(), dispatch) })
        .catch((error) => {
          // console.log(error)
        })
      }
      if(postStatus === 'idle')
        dispatch(fetchPosts()) 
  },[dispatch, usersStatus, userStatus, postStatus])

    return (
    
      <div className="App">
          <div style={{height: "50px"}} ></div> 

          <Header />
          <Error />
          <Outlet />
          <ScrollRestoration />
      </div>

      
    );
}

export default App;
