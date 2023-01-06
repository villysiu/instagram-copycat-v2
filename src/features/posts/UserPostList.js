import { selectPostByUser } from './postsSlice'
import { useSelector } from 'react-redux'
export const UserPostList = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state => selectPostByUser(state, userId))
  // omit component logic
}