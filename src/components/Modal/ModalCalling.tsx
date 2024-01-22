import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import { Input, TextArea, Button, Modal} from "components/Base";
import { Row, Col } from "react-bootstrap";
import { ContactInfo } from "types";
import { elapsedTime } from "helpers/utils"
import imgEndCall from "assets/images/end-call.svg"

interface ModalCallingProps {
    contact: ContactInfo
    phone: string,
    onClose?: () => void
}

export const ModalCalling = ({
    contact,
    phone,
    onClose
} : ModalCallingProps ) => {
	const dispatch = useAppDispatch();	

    const [elapsed, setElapsed] = useState(0)

    const handleNext = () => {
        if(onClose) onClose();
    }

	return (
        <Modal title="Calling" footer={{ok: 'Next'}} size="lg" onClose={onClose} onOk={handleNext}>
            <Row className="gy-3">
                <Col md={4}>

                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center">
                        <img src={contact.avatar} className="co-avatar call-modal-avatar" />                
                        <div className="text-xl mt-3">
                            <span className="me-1">{contact.firstName}</span><span>{contact.lastName}</span>
                        </div>
                        <div className="text-normal text-desc">
                            {contact.description}
                        </div>
                        <div className="divider my-3" style={{maxWidth: 250}} />
                        <div className="co-phone-number mb-2">{phone}</div>
                        <div className="elapsed-time mb-2">{elapsedTime(elapsed)}</div>
                        
                        <div className="anchor">
                            <img src={imgEndCall}/>
                        </div>
                    </div>        
                </Col>
                <Col md={4} >
                    <Button icon="note" className="secondary mx-auto me-md-0">Add Note</Button>
                </Col>
            </Row>            
        </Modal>
	)
}

export default ModalCalling