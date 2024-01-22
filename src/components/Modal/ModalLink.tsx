import React, {useState, useRef, useCallback, ChangeEvent} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import {Button, Input, Modal} from "components/Base";
import Cropper from 'react-easy-crop'

interface ModalAddQuickLinkProps {
    onClose?: () => void
}

export const ModalAddQuickLink = ({
    onClose
} : ModalAddQuickLinkProps ) => {
	const dispatch = useAppDispatch();	
    const fileRef = useRef<HTMLInputElement>(null)
    const [previewImg, setPreviewImg] = useState<string | undefined>(undefined)

    const [modalUploadVisible, setModalUploadVisible] = useState(false)
    
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
  
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
      console.log(croppedArea, croppedAreaPixels)
    }, [])
    
    const handleSave = () => {
        if(onClose) onClose();
    }

    const handleUpload = () => {
        if(fileRef.current) {
            fileRef.current.click();
        }
    }
    
    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        if( e.target?.files?.length ) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    setPreviewImg(reader.result)
                    setModalUploadVisible(true)
                }
            }
            reader.readAsDataURL(e.target.files[0]);

            e.target.value = ''
        }
    }

    const handleSavePhoto = () => {
        console.log(crop)
        console.log(zoom)
        setModalUploadVisible(false)
    }

	return (
        <Modal title="Add Quick Link" footer={{ok: 'Save'}} onClose={onClose} onOk={handleSave}>
            <Input type="search" icon="search" className="mb-3" placeholder="Search" />
            
            <Input type="text" label="External URL" placeholder="Multi-Family" className="mb-3" />
            
            <div className="co-label">Upload Photo</div>
            <Button className="primary mb-3" icon="upload" onClick={handleUpload}>Upload</Button>
            <input type="file" className="d-none" ref={fileRef} onChange={handleFile} accept="image/*"/>

            {modalUploadVisible &&
                <Modal title="Upload Photo" full={true} footer={{ok: 'Save'}} onClose={() => setModalUploadVisible(false)} onOk={handleSavePhoto}>
                    <div className="photo-wrapper">
                        <Cropper
                            image={previewImg}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            cropShape="round"
                            showGrid={false}
                            objectFit='horizontal-cover'
                        />
                    </div>
                </Modal>
            }
        </Modal>
	)
}

export default ModalAddQuickLink