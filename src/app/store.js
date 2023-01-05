import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import postReducer from '../features/posts/postSlice'
export default configureStore({
  reducer: {
    post: postReducer
  }
})

