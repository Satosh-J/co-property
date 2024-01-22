import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import {Input, RadioBox, Modal } from "components/Base";
import { Row, Col } from "react-bootstrap";
import { FOLLOW_TYPE, ACTION_TITLE} from "types"

interface ModalAddFollowUpProps {
    onClose?: () => void
}

export const ModalAddFollowUp = ({
    onClose
} : ModalAddFollowUpProps ) => {
	const dispatch = useAppDispatch();	
    const [followType, setFollowType] = useState<FOLLOW_TYPE>('phone')

    const handleSave = () => {
        if(onClose) onClose();
    }

	return (
        <Modal title="Add Follow Up Event" footer={{ok: 'Save'}} size="lg" onClose={onClose} onOk={handleSave}>
            <Row className="gy-3">
                <Col sm={6}>
                    <Input type="search" icon="search" label="To" placeholder="Search" />
                </Col>
                <Col sm={6}>
                    <Input type="text" label="Date" placeholder="MM-DD-YYYY"/>
                </Col>
                <Col sm={6}>
                    <Input type="text" label="Title" placeholder="Type" />
                </Col>
                <Col sm={6}>
                    <Input type="text" label="Description" placeholder="Type"/>
                </Col>

                <div className="co-label" style={{marginBottom: '-15px'}}>
                    Follow Up Item
                </div>
                
                <Col xs={12}>
                    <Row className="gy-2">
                        {Object.entries(ACTION_TITLE).map(([key, title]) => (
                            <Col sm={6} md={3}>
                                <RadioBox value={key} current={followType} title={title} onChange={setFollowType} bordered/>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Modal>
	)
}

export default ModalAddFollowUp