import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import { Input, TextArea, Button, Modal} from "components/Base";
import { Row, Col } from "react-bootstrap";
import { ContactInfo } from "types";
import ModalCalling from "./ModalCalling";

interface ModalCallProps {
    contact: ContactInfo
    onClose?: () => void
}

export const ModalCall = ({
    contact,
    onClose
} : ModalCallProps ) => {
	const dispatch = useAppDispatch();	
    const [callingModalVisible, setCallingModalVisible] = useState(false)
    const [phoneForCall, setPhoneForCall] = useState('')

    const handleSend = () => {
        if(onClose) onClose();
    }

    const handleCall = (phone : string | undefined) => {
        if( phone !== undefined ) {
            setPhoneForCall(phone)
            setCallingModalVisible(true)
        }
    }

	return (
        <>
        <Modal title="Call" footer={{ok: 'Send'}} size="lg" onClose={onClose} onOk={handleSend} noFooter>
            <div className="d-flex justify-content-between mb-3">
                <div className="d-flex align-items-center">
                    <img src={contact.avatar} className="co-avatar call-modal-avatar" />
                    <div className="text-xl ms-3">
                        <span className="me-1">{contact.firstName}</span><span>{contact.lastName}</span>
                        <div className="text-normal text-desc">
                            {contact.description}
                        </div>
                    </div>
                </div>
                <Button className="secondary" icon="list">Phone List</Button>
            </div>
            {contact.phone &&
                <div className="d-flex align-items-end">
                    <Input label="Cell Phone" className="flex-1" value={contact.phone}/>
                    <Button className="primary ms-2" icon="phone" size="lg" onClick={() => handleCall(contact.phone)}>Phone Call</Button>
                </div>
            }
            {contact.officePhone &&
            <div className="d-flex align-items-end">
                <Input label="Office Phone" className="flex-1" value={contact.officePhone}/>
                <Button className="primary ms-2" icon="phone" size="lg" onClick={() => handleCall(contact.officePhone)}>Phone Call</Button>
            </div>
            }
        </Modal>
        
        {callingModalVisible &&
            <ModalCalling contact={contact} phone={phoneForCall} onClose={() => setCallingModalVisible(false)} />
        }
        </>
	)
}

export default ModalCall