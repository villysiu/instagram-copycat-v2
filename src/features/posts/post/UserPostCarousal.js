import { Carousel } from "react-bootstrap"
import { useState } from "react";
import Post from "./Post";
import PostPopup from "./postPopup/PostPopup";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
const UserPostCarousal = ({posts, idx}) =>{

  // console.log(posts)
  const [index, setIndex] = useState(idx);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
   
   
      <Carousel interval={null} indicators={false} 
      
        activeIndex={index} 
        onSelect={handleSelect} 
        wrap={false} variant="dark"
        bsPrefix="userposts_carousal"
        nextIcon={<ArrowRightCircleFill className="userposts_carousal_next_icons"/>}
        prevIcon={<ArrowLeftCircleFill className="userposts_carousal_prev_icons"/>}
        touch={true}
      >
        {posts.map(post=>{
          return (
            <Carousel.Item key={post.id} >
              <PostPopup post={post} setShow={null} />
            </Carousel.Item>
          )})
        }
      </Carousel>
    </>
  )
}
    export default UserPostCarousal 