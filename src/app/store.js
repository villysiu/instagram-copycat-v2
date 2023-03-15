import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import userReducer from '../features/user/userSlice'
import usersReducer from '../features/user/usersSlice'
export default configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
    users: usersReducer
    
  }
})

