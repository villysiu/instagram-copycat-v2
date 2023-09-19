import { Form, Image } from "react-bootstrap"
import { Modal } from "react-bootstrap"
// import PostImg from "../post/PostImg"
import placeholder from "../../../images/X (1).png"

    

const DescForm = ({img, setDesc, desc}) => {
    console.log(desc)
    const handleImgErr=(e)=>{
        e.target.src = placeholder
    }
    return (
       

            <Modal.Body className="add_post_modal_body">
                <div className="add_post_desc_wrapper me-1">
                <Form.Control as="textarea" bsPrefix="desc_input" name="desc" value={desc} 
                placeholder="Write a caption..." onChange={e=>setDesc(e.target.value)} />
                </div>
                <div className="preview_img_wrapper ms-1" >
                    <Image src={img} alt="name" className="preview_img" onError={handleImgErr}/>
                </div>
        
            </Modal.Body>


    )
}
export default DescForm