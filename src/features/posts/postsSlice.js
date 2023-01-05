import { createSlice } from '@reduxjs/toolkit'
import { client } from '../../api/client'
const initialState = {
  posts: []
}
// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//   const response = await client.get('http://localhost:3000/posts')
//   return response.data
// })
export const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.posts = [...state.posts, action.payload]
    },
  
  }
})

// Action creators are generated for each case reducer function
export const { postAdded  } = postSlice.actions

export default postsSlice.reducer
export default selectAllPosts = state => state.posts
export const selectPostById = (state, postId) =>
  state.posts.find(post => post.id === postId)