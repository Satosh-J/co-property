import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import {Button, Input, TextArea, Modal} from "components/Base";
import { Row, Col } from "react-bootstrap";
import { RadioBox, Toggle } from "components/Base";
import { EVENT_REPEAT, FOLLOW_DURATION, EVENT_REPEAT_TITLE } from "types"

interface ModalAddEventProps {
    onClose?: () => void
}

export const ModalAddEvent = ({
    onClose
} : ModalAddEventProps ) => {
	const dispatch = useAppDispatch();	
    const [enableFollowTime, setEnableFollowTime] = useState(false)
    const [enableRepeat, setEnableRepeat] = useState(false)
    const [followTime, setFollowTime] = useState<FOLLOW_DURATION>(5)
    const [repeat, setRepeat] = useState<EVENT_REPEAT>('daily')

    const handleSave = () => {
        if(onClose) onClose();
    }

	return (
        <Modal title="Add Calendar Event" footer={{ok: 'Save'}} size="lg" onClose={onClose} onOk={handleSave}>
            <Row className="gy-3">
                <Col sm={6}>
                    <Input type="search" label="Invite Contacts" icon="search" placeholder="Search" />
                </Col>
                <Col sm={6}>
                    <Input type="text" label="Location" placeholder="Type"/>
                </Col>
                <Col sm={6}>
                    <Input type="text" label="Title" placeholder="Type" />
                </Col>
                <Col sm={6}>
                    <Input type="text" label="Date" placeholder="Type"/>
                </Col>
                <Col>
                    <TextArea label="Description" placeholder="Type" rows={3}/>
                </Col>

                <div className="divider" />

                <Row className="gy-3">
                    <Col sm={4}>
                        <Row>
                            <Col xs={6}>
                                <div className="text-normal text-semibold">Follow Ups</div>
                            </Col>
                            <Col xs={6}>
                                <Toggle value={enableFollowTime} onChange={setEnableFollowTime}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={8}>
                        <Row className="gy-3">
                            <Col sm={4} xs={6}>
                                <RadioBox value={5} current={followTime} title="5 Minutes" onChange={setFollowTime} disabled={!enableFollowTime}/>
                            </Col>
                            <Col sm={4} xs={6}>
                                <RadioBox value={10} current={followTime} title="10 Minutes" onChange={setFollowTime} disabled={!enableFollowTime}/>
                            </Col>
                            <Col sm={4} xs={6}>
                                <RadioBox value={15} current={followTime} title="15 Minutes" onChange={setFollowTime} disabled={!enableFollowTime}/>
                            </Col>
                            <Col sm={4} xs={6}>
                                <RadioBox value={30} current={followTime} title="30 Minutes" onChange={setFollowTime} disabled={!enableFollowTime}/>
                            </Col>
                            <Col sm={4} xs={6}>
                                <RadioBox value={60} current={followTime} title="60 Minutes" onChange={setFollowTime} disabled={!enableFollowTime}/>
                            </Col>
                            <Col sm={4} xs={6}>
                                <RadioBox value={1440} current={followTime} title="24 Hours" onChange={setFollowTime} disabled={!enableFollowTime}/>
                            </Col>
                        </Row>        
                    </Col>
                </Row>
                <Row className="gy-3">
                    <Col sm={4}>
                        <Row>
                            <Col xs={6}>
                                <div className="text-normal text-semibold">Repeat</div>
                            </Col>
                            <Col xs={6}>
                                <Toggle value={enableRepeat} onChange={setEnableRepeat}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={8}>
                        <Row className="gy-3">
                            {Object.entries(EVENT_REPEAT_TITLE).map(([key, title]) => (
                                <Col sm={4}>
                                    <RadioBox value={key} current={repeat || 'daily'} title={title} onChange={setRepeat} disabled={!enableRepeat}/>
                                </Col>
                            ))}
                        </Row>        
                    </Col>
                </Row>
            </Row>
        </Modal>
	)
}

export default ModalAddEvent