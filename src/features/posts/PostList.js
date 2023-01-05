import { selectAllPosts } from './postsSlice'
import { useSelector } from 'react-redux'
export const PostList = () => {
  const posts = useSelector(selectAllPosts)
  // omit component contents
}

