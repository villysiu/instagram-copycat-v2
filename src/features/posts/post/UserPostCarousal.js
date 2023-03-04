import { Carousel } from "react-bootstrap"
import { useState } from "react";
import Post from "./Post";
const UserPostCarousal = ({posts, idx, handleClick}) =>{

  console.log(posts)
  const [index, setIndex] = useState(idx);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel interval={null} indicators={false} activeIndex={index} onSelect={handleSelect} wrap={false} variant="dark">
        
        {posts.map(post=>{
          return (
            <Carousel.Item key={post.id} >
              <Post post={post} handleClick={handleClick} />
            </Carousel.Item>
          )})}
      </Carousel>
  )
}
    export default UserPostCarousal 