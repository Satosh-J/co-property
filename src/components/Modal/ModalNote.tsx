import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import { Input, TextArea, Modal} from "components/Base";
import { Row, Col } from "react-bootstrap";

interface ModalNoteProps {
    onClose?: () => void
}

export const ModalNote = ({
    onClose
} : ModalNoteProps ) => {
	const dispatch = useAppDispatch();	

    const handleSend = () => {
        if(onClose) onClose();
    }

	return (
        <Modal title="Add Note" footer={{ok: 'Save'}} size="md" onClose={onClose} onOk={handleSend}>
            <Row className="gy-3">
                <Col xs={12}>
                    <Input type="text" label="Title" placeholder="Type" />
                </Col>
                <Col xs={12}>
                    <Input type="text" label="Date" placeholder="MM-DD-YYYY"/>
                </Col>                
                <Col xs={12}>
                    <TextArea label="Description" placeholder="Type" rows={3}/>
                </Col>
            </Row>
        </Modal>
	)
}

export default ModalNote