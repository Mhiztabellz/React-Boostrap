import  { useState } from 'react';
import { Button, Modal } from "react-bootstrap/";

interface Props {
    data: any;
}
export default function BlogItem(props: Props) {
    const { data } = props;
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const learnMoreButtonStyle = {
        alignSelf: 'flex-end',  //! Align the button to the right
        marginTop: 'auto',  //? Push the button to the bottom
    };

    return (
        <>
        <div style={{ width: "100%", height: "auto", border: "1px solid black", padding: 16, marginBottom: 16, borderRadius: 8 }}>
            <img src={data?.images} style={{ width: "100%", height: "144px", alignItems: "center" }} className="blog_image" alt=" "></img>
            <div className="blog_content">
                <h6 className="blog_title">{data?.title}</h6>
                <span>Posted On {new Date(data?.date).toLocaleDateString()}</span>
                <p>{data?.summary}</p>
                <div style={{ display: "flex", alignItems: "center", marginTop: 16 }} className="buttom_section">
                    <div className="autor_section">
                        <img style={{ width: 48, height: 48, borderRadius: 24 }} src={data?.author?.image} />
                        <p>{data?.author?.name}</p>
                        <p>{data?.author?.email}</p>
                    </div>
                </div>
            </div>
            <Button variant="primary" style={learnMoreButtonStyle} onClick={toggleModal}>
                Learn More
            </Button>
            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{data?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{data?.content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={toggleModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    );
}
