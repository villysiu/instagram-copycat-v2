import React, {useEffect} from 'react';
import Header from './features/header/Header';
import './App.css';
import { Outlet } from "react-router-dom";
import Error from './features/error/Error';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './features/posts/postsSlice';
import { fetchCurrentUserId } from './features/user/usersSlice';
import { ScrollRestoration } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

function App() {
    
    const dispatch=useDispatch();

    const currUserIdStatus = useSelector(state => state.users.currUser.status)
    const postStatus = useSelector(state => state.posts.status)
    
    useEffect(()=>{
        if(currUserIdStatus === 'idle' ){
            dispatch(fetchCurrentUserId())
        }
        if(postStatus === 'idle')
            dispatch(fetchPosts()) 
    },[dispatch, currUserIdStatus, postStatus])


    return (
    
      <div className="App ori">
          
          <div className="header_wrapper">
            <Header />
            <div className="blank_div" />
          </div>
          <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <Error />
            <Outlet />
          </div>
          
          {/* <ScrollRestoration /> */}
      </div>

      
    );
}

export default App;
