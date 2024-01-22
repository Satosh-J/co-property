import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import {RadioBox, Input, TextArea, Modal} from "components/Base";
import { Row, Col } from "react-bootstrap";
import { PRIORITY, PRIORITY_TITLE } from "types"

interface ModalAddTaskProps {
    onClose?: () => void
}

export const ModalAddTask = ({
    onClose
} : ModalAddTaskProps ) => {
	const dispatch = useAppDispatch();	
    const [priority, setPriority] = useState<PRIORITY>('low')

    const handleSave = () => {
        if(onClose) onClose();
    }

	return (
        <Modal title="Add Calendar Event" footer={{ok: 'Save'}} size="lg" onClose={onClose} onOk={handleSave}>
            <Row className="gy-3">
                <Col sm={6}>
                    <Input type="text" label="Title" placeholder="Type" />
                </Col>
                <Col sm={6}>
                    <Input type="text" label="Date" placeholder="MM-DD-YYYY"/>
                </Col>
                <Col xs={12}>
                    <TextArea label="Description" placeholder="Type" rows={3}/>
                </Col>

                <div className="co-label" style={{marginBottom: '-15px'}}>
                    Task Importance
                </div>
                <Col sm={4}>
                    <RadioBox value='low' current={priority} title={PRIORITY_TITLE['low']} className="text-success" onChange={setPriority} bordered/>
                </Col>
                <Col sm={4}>
                    <RadioBox value='medium' current={priority} title={PRIORITY_TITLE['medium']} className="text-warning" onChange={setPriority} bordered/>
                </Col>
                <Col sm={4}>
                    <RadioBox value='high' current={priority} title={PRIORITY_TITLE['high']} className="text-danger" onChange={setPriority} bordered/>
                </Col>
            </Row>
        </Modal>
	)
}

export default ModalAddTask