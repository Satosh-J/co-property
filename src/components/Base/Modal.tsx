import React, { FC } from 'react'
import { Button } from '.';
import type {TYPE_SIZE} from "types"

interface ModalProps {
    className?: string,
    title?: string,
    onClose?: () => void,
    onOk?: () => void,
    size?: TYPE_SIZE,
    full?: boolean,
    noFooter?: boolean,
    footer?: {
        ok?: string | null,
        cancel?: string | null
    }
}

const Modal : FC<ModalProps> = ({children, title = '', size = "md", full = false, footer, noFooter = false, onClose, onOk}) => {

    const handleClose = () => {
        if( onClose )
            onClose();
    }

    const handleOk = () => {
        if( onOk )
            onOk();
    }

    console.log(typeof footer)

    return (
        <div className="co-modal">
            <div className="co-modal-mask" onClick={handleClose}>
            </div>

            <div className={`co-modal-container ${size}`}>
                <div className="co-modal-close" onClick={handleClose}>
                </div>
                
                <div className="co-modal-title">{title}</div>

                <div className={`co-modal-content ${full ? 'content-full' : ''}`}>
                    {children}
                </div>
                {!noFooter &&
                <div className="co-modal-footer d-flex justify-content-center justify-content-lg-end">
                    {footer?.cancel !== null &&
                        <Button className="secondary w-120p" onClick={handleClose}>{footer?.cancel || 'Cancel'}</Button>
                    }
                    {footer?.ok !== null &&
                        <Button className="primary w-120p ms-2" onClick={handleOk}>{footer?.ok || 'Ok'}</Button>
                    }
                </div>
                }
            </div>
        </div>
    )
}

export default Modal