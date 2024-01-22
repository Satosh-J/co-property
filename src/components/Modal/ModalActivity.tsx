import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import { Input, TextArea, Modal, RadioBox} from "components/Base";
import { Row, Col } from "react-bootstrap";
import { FOLLOW_TYPE, ACTION_TITLE} from "types"

interface ModalActivityProps {
    onClose?: () => void
}

export const ModalActivity = ({
    onClose
} : ModalActivityProps ) => {
	const dispatch = useAppDispatch();	
    const [followType, setFollowType] = useState<FOLLOW_TYPE>('phone')

    const handleSend = () => {
        if(onClose) onClose();
    }

	return (
        <Modal title="Add Activity" footer={{ok: 'Save'}} size="lg" onClose={onClose} onOk={handleSend}>
            <Row className="gy-3">
                <Col sm={6}>
                    <Input type="text" label="Title" placeholder="Autofill"/>
                </Col>  
                <Col sm={6}>
                    <Input type="text" label="Date" placeholder="Type"/>
                </Col>                
                <Col xs={12}>
                    <TextArea label="Message" placeholder="Type" rows={3}/>
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

export default ModalActivity