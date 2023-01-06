import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const url="http://localhost:3000"
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetch('http://localhost:3000/photos.json')
    return response.data
  }
)
export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (formData)=>{
    console.log(formData)
    try {
      const response=await fetch(`${url}/photos`, {
          method: 'POST',
          headers: {
              "Authorization": localStorage.getItem("token")
          },
          body: formData
      })
      const data=await response.json()
      console.log(response)
      console.log(data)
      if(!response.ok) throw data.error
      postAdded()
     return {
      status: response.status,
      data,
     }
    }catch(error){
      console.log("Oops! Something went wrong. Please try again")
      return {
        error: "Oops! Something went wrong. Please try again"
      }
      // dispatch({type: 'ADD_ERROR', payload: "Oops! Something went wrong. Please try again"})
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
    
    // postAdded: (state, action) => {
    //   state.posts.push(action.payload)
    // },
    // postsFetched: (state, action) => {
    //   state.posts = state.posts.concat(action.payload)
    // }
  },
  extraReducers(builder) {
    builder
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload)
      })
  }
})

// Action creators are generated for each case reducer function
export const { postAdded, postsFetched } = postsSlice.actions

export default postsSlice.reducer
export const selectAllPosts = (state) => state.posts.posts
