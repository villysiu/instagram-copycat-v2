import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const url="http://localhost:3000"

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    try {
      const response = await fetch('http://localhost:3000/photos.json')
      const data=await response.json()

      if(!response.ok) 
        throw new Error(response.statusText)
      return {
        // status: response.status,
        data,
       }
    } catch(error){

      return Promise.reject(error.message ? error.message : "no data")
    }
  }
)
export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (formData)=>{
    
    try {
      const response=await fetch(`${url}/photos`, {
          method: 'POST',
          headers: {
              "Authorization": localStorage.getItem("token")
          },
          body: formData
      })
      const data=await response.json()

      if(!response.ok) 
        throw new Error(response.statusText)
     return {
      data,
     }
    }catch(error){
      // console.log("Oops! Something went wrong. Please try again")
      return Promise.reject(error.message ? error.message : "no data")
    }
  }
)
export const likeAPost = createAsyncThunk(
  'posts/likeAPost',
  async (post_id)=>{
    try {
      //`http://localhost:3000/photos/${photo_id}/likes`
      const response=await fetch(`${url}/photos/${post_id}/likes`, {
        method: 'POST',
        headers: {
          'Content-type': "application/json",
          "Authorization": localStorage.getItem("token")
        },
      })
      const data=await response.json()
      if(!response.ok) 
        throw new Error(response.statusText)
      return {
        post_id,
        data,
      }
    } catch (error) {
      return Promise.reject(error.message ? error.message : "no data")
    }
  }
)
export const unlikeAPost = createAsyncThunk(
  'posts/unlikeAPost',
  async ({post_id, liked_id}) =>{
    // console.log(post_id, liked_id)
    try {
      //http://localhost:3000/photos/${photo_id}/likes/${liked_id}`
      const response=await fetch(`${url}/photos/${post_id}/likes/${liked_id}`, {
        method: "delete",
        headers: {
            'Content-type': "application/json",
            'Authorization': localStorage.getItem('token'),
        },
      })
      const data=await response.json()
      if(!response.ok) 
        throw new Error(response.statusText)
      //   console.log(response)
      // console.log(data)
      return {
        post_id,
        liked_id,
      }
    } catch (error) {
      // console.log("i m here")
      return Promise.reject(error.message ? error.message : "no data")
    }
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {
  
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        // console.log(action)
        state.status = 'succeeded'
        state.posts = state.posts.concat(action.payload.data)

      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // console.log(action)
        state.posts.push(action.payload.data)
      })
      .addCase(likeAPost.fulfilled, (state, action)=>{
        // console.log(action)
        const post=state.posts.find(post=>post.photo_id===action.payload.post_id)
        post.liked_users.push(action.payload.data)
      })
      .addCase(unlikeAPost.fulfilled, (state, action)=>{
        // console.log(action)
        const post=state.posts.find(post=>post.photo_id===action.payload.post_id)
        post.liked_users=post.liked_users.filter(liked=>liked.liked_id!==action.payload.liked_id)
      })
  }
})

// Action creators are generated for each case reducer function
export const { postAdded, postsFetched } = postsSlice.actions

export default postsSlice.reducer
export const selectAllPosts = (state) =>{
  // console.log(state)
  return state.posts.posts
} 

