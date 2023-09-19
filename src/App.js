import React, {useEffect} from 'react';
import Header from './features/header/Header';
import './App.css';
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
// import { fetchPosts } from './features/posts/postsSlice';
import { fetchCurrentUserId } from './features/user/usersSlice';
import Message from './features/messages/Message';

function App() {
    
    const dispatch=useDispatch();

    const currUserIdStatus = useSelector(state => {
      console.log(state)
      return state.users.currUser.status
})
    // const postStatus = useSelector(state => state.posts.status)
    
    useEffect(()=>{
        if(currUserIdStatus === 'idle' ){
            dispatch(fetchCurrentUserId())
        }
    },[dispatch, currUserIdStatus
      // postStatus
    ])


    return (
    
      <div className="App ori">
          
          <div className="header_wrapper">
            <Header />
            <div className="blank_div" />
          </div>
          <div className="body_wrapper">
            <Message />
            <Outlet />
          </div>
          
          {/* <ScrollRestoration /> */}
      </div>

      
    );
}

export default App;
