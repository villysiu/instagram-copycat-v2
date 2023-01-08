import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/posts/postsSlice'
import userReducer from '../features/user/userSlice'
export default configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer
  }
})

