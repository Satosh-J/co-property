import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import { Input, TextArea, Modal} from "components/Base";
import { Row, Col } from "react-bootstrap";

interface ModalSMSProps {
    onClose?: () => void
}

export const ModalSMS = ({
    onClose
} : ModalSMSProps ) => {
	const dispatch = useAppDispatch();	

    const handleSend = () => {
        if(onClose) onClose();
    }

	return (
        <Modal title="Text Message" footer={{ok: 'Send'}} size="lg" onClose={onClose} onOk={handleSend}>
            <Row className="gy-3">
                <Col sm={6}>
                    <Input type="search" icon="search" label="To" placeholder="Search" />
                </Col>
                <Col sm={6}>
                    <Input type="text" label="Phone Number" placeholder="Number"/>
                </Col>                
                <Col xs={12}>
                    <TextArea label="Message" placeholder="Type" rows={3}/>
                </Col>
            </Row>
        </Modal>
	)
}

export default ModalSMS