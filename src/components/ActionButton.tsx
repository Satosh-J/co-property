import React, {useState} from 'react';
import Button from './Base/Button'
import ModalSMS from './Modal/ModalSMS'
import ModalEmail from './Modal/ModalEmail'
import ModalCall from './Modal/ModalCall'
import { ElementProps } from './Base/interface'
import {ACTION_TITLE} from "types"
import type {ContactInfo, FOLLOW_TYPE} from "types"
import ModalFollowUpCompleted from './Modal/ModalFollowUpCompleted';

interface ActionButtonProps extends ElementProps {
    type: FOLLOW_TYPE,
    contact: ContactInfo
}

const ActionButton = function({
    type,
    contact,
    onClick,
    className=''
} : ActionButtonProps) {
    const [smsModalVisible, setSMSModalVisible] = useState(false)
    const [emailModalVisible, setEmailModalVisible] = useState(false)
    const [phoneModalVisible, setPhoneModalVisible] = useState(false)
    const [followUpModalVisible, setFollowUpModalVisible] = useState(false)

    const handleClick = () => {
        if(type === "sms")
            setSMSModalVisible(true)
        else if(type === "email")
            setEmailModalVisible(true)
        else if(type === "phone")
            setPhoneModalVisible(true)
        else if(type === "followup")
            setFollowUpModalVisible(true)
    }

    return (
        <>
        <Button className={`secondary ${className}`} icon={type} onClick={handleClick}>            
            {ACTION_TITLE[type]}
        </Button>

        {smsModalVisible &&
            <ModalSMS onClose={() => setSMSModalVisible(false)} />
        }
        {emailModalVisible &&
            <ModalEmail onClose={() => setEmailModalVisible(false)} />
        }
        {phoneModalVisible &&
            <ModalCall contact={contact} onClose={() => setPhoneModalVisible(false)} />
        }        
        {followUpModalVisible &&
            <ModalFollowUpCompleted onClose={() => setFollowUpModalVisible(false)} />
        }
        </>
    );
}

export default ActionButton;
