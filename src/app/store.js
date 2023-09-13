import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/user/usersSlice'
import messagesReducer from '../features/messages/messageSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    messages: messagesReducer,
  }
})

