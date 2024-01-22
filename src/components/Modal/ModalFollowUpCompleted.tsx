import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import { Input, TextArea, Button, Modal} from "components/Base";
import imgSuccess from "assets/images/success.svg"

interface ModalFollowUpCompletedProps {
    onClose?: () => void
}

export const ModalFollowUpCompleted = ({
    onClose
} : ModalFollowUpCompletedProps ) => {
	const dispatch = useAppDispatch();	

    const handleDone = () => {
        if(onClose) onClose();
    }

	return (
        <Modal title="Completed Follow Up" footer={{ok: 'Done', cancel: null}} size="md" onClose={onClose} onOk={handleDone}>
            <div className="text-center">
                <img src={imgSuccess} className="p-3" />
                <h1 className="mb-3">Success</h1>                
                <Button className="secondary mx-auto">Add New Follow Up</Button>
            </div>
        </Modal>
	)
}

export default ModalFollowUpCompleted