import { Modal } from "react-bootstrap"
const NewPostHeader = ({title, desc, setShow, handleSubmit}) =>{
    return (
        <Modal.Header className="add_post_modal_header" >
                <div className="cancel_button" onClick={()=>setShow(false)}>Cancel</div>
                <Modal.Title className="add_post_modal_title">{title}</Modal.Title>
                {!desc.trim() ? 
                    <div className="disabled_button">Done</div> : 
                    <div className="done_button" onClick={handleSubmit}>Done</div>
                }
        </Modal.Header>
    )
}
export default NewPostHeader