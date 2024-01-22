import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import { Input, TextArea, Modal} from "components/Base";
import { Row, Col } from "react-bootstrap";

interface ModalEmailProps {
    onClose?: () => void
}

export const ModalEmail = ({
    onClose
} : ModalEmailProps ) => {
	const dispatch = useAppDispatch();	

    const handleSend = () => {
        if(onClose) onClose();
    }

	return (
        <Modal title="Email" footer={{ok: 'Send'}} size="lg" onClose={onClose} onOk={handleSend}>
            <Row className="gy-3">
                <Col sm={6}>
                    <Input type="search" icon="search" label="To" placeholder="Search" />
                </Col>
                <Col sm={6}>
                    <Input type="text" label="Choose Template" placeholder="Template"/>
                </Col>  
                <Col sm={6}>
                    <Input type="text" label="Subject" placeholder="Type"/>
                </Col>                
                <Col xs={12}>
                    <TextArea label="Message" placeholder="Type" rows={3}/>
                </Col>
            </Row>
        </Modal>
	)
}

export default ModalEmail