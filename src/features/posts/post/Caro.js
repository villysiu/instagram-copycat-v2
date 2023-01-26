import { Carousel } from "react-bootstrap"
import { useState } from "react";
import Post from "./Post";
const Caro = ({posts, idx, handleClick}) =>{

  console.log(posts)
  const [index, setIndex] = useState(idx);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect} wrap={false}>
          
          {posts.map(post=>{
            return (
              <Carousel.Item >
              
                  <Post post={post} handleClick={handleClick} />
               
                {/* <Carousel.Caption>
                  <h3>{post.desc}</h3>
                  
                </Carousel.Caption> */}
              </Carousel.Item>
            )})}
        

          
      
      
    </Carousel>
    )
    }
    export default Caro